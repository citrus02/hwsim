param(
  [Parameter(Mandatory = $true)]
  [string]$ZipPath
)

$ErrorActionPreference = "Stop"

$root = (Resolve-Path ".").Path
$zipFullPath = [System.IO.Path]::GetFullPath((Join-Path $root $ZipPath))

$excludedRootNames = @(
  ".git",
  ".cache",
  ".kilo",
  ".trae",
  ".uploads",
  ".venv",
  "CLAUDE.md",
  "scripts"
)

$excludedDirectoryNames = @(
  "__pycache__"
)

$excludedFileNamePatterns = @(
  "*.bak",
  "*.bak*",
  "fix*.js",
  "fix*.py",
  "extract_*.py",
  "generate_lessons.py",
  "rebuild*.js",
  "temp_*.txt",
  "test-questionbank.mjs"
)

$excludedRelativeNames = @(
  "_spec\check_syntax.js",
  "tools\check_frags.ps1",
  "tools\merge_latin.ps1",
  "tools\verify_latin.ps1"
)

$excludedRelativePrefixes = @(
  ".claude\worktrees\"
)

function Get-RelativePathCompat {
  param(
    [string]$BasePath,
    [string]$TargetPath
  )

  $baseUri = New-Object System.Uri(($BasePath.TrimEnd("\") + "\"))
  $targetUri = New-Object System.Uri($TargetPath)
  $relativeUri = $baseUri.MakeRelativeUri($targetUri)
  return [System.Uri]::UnescapeDataString($relativeUri.ToString()).Replace("/", "\")
}

function Test-IsExcludedPath {
  param([string]$FullName)

  $relative = Get-RelativePathCompat -BasePath $root -TargetPath $FullName
  $relative = $relative.Replace("/", "\")

  if ([System.IO.Path]::GetFullPath($FullName) -eq $zipFullPath) {
    return $true
  }

  $parts = $relative -split "\\"
  if ($parts.Length -gt 0 -and $excludedRootNames -contains $parts[0]) {
    return $true
  }

  foreach ($name in $excludedRelativeNames) {
    if ($relative.Equals($name, [System.StringComparison]::OrdinalIgnoreCase)) {
      return $true
    }
  }

  $fileName = [System.IO.Path]::GetFileName($FullName)
  foreach ($pattern in $excludedFileNamePatterns) {
    if ($fileName -like $pattern) {
      return $true
    }
  }

  foreach ($part in $parts) {
    if ($excludedDirectoryNames -contains $part) {
      return $true
    }
  }

  foreach ($prefix in $excludedRelativePrefixes) {
    if ($relative.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
      return $true
    }
  }

  return $false
}

if (Test-Path -LiteralPath $zipFullPath) {
  Remove-Item -LiteralPath $zipFullPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipFullPath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  $files = Get-ChildItem -LiteralPath $root -Recurse -Force -File |
    Where-Object { -not (Test-IsExcludedPath $_.FullName) }

  foreach ($file in $files) {
    $entryName = (Get-RelativePathCompat -BasePath $root -TargetPath $file.FullName).Replace("\", "/")
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
      $zip,
      $file.FullName,
      $entryName,
      [System.IO.Compression.CompressionLevel]::Optimal
    ) | Out-Null
  }
}
catch {
  $zip.Dispose()
  if (Test-Path -LiteralPath $zipFullPath) {
    Remove-Item -LiteralPath $zipFullPath -Force -ErrorAction SilentlyContinue
  }
  throw
}
finally {
  if ($zip) {
    $zip.Dispose()
  }
}

if (-not (Test-Path -LiteralPath $zipFullPath)) {
  throw "Zip file was not created."
}

$item = Get-Item -LiteralPath $zipFullPath
if ($item.Length -le 0) {
  Remove-Item -LiteralPath $zipFullPath -Force
  throw "Zip file is empty."
}

Write-Host "Zip created: $zipFullPath"
