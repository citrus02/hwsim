"""
generate-latin-audio.py
拉丁语课程音频生成脚本
使用 eSpeak NG（拉丁语 la 语音）生成正确的古典拉丁发音

用法：
  python generate-latin-audio.py          # 生成第1课音频
  python generate-latin-audio.py --all    # 生成所有课程音频
  python generate-latin-audio.py --lesson 2  # 生成第2课音频

依赖：eSpeak NG 已安装（winget install eSpeak-NG.eSpeak-NG）
发音规则：c 永远 [k]，元音纯长音，符合古典拉丁语音韵
"""

import os
import sys
import json
import subprocess
from pathlib import Path

ESPEAK = r"C:\Program Files\eSpeak NG\espeak-ng.exe"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = PROJECT_ROOT / "audio" / "latin"

LESSON_VOCAB = {
    1: {
        "name": "第1课 字母表与发音规则",
        "words": [
            {"id": "vowel-a", "text": "a", "label": "元音 a"},
            {"id": "vowel-e", "text": "e", "label": "元音 e"},
            {"id": "vowel-i", "text": "i", "label": "元音 i"},
            {"id": "vowel-o", "text": "o", "label": "元音 o"},
            {"id": "vowel-u", "text": "u", "label": "元音 u"},
            {"id": "consonant-ca", "text": "ka", "label": "ca = ka"},
            {"id": "consonant-ce", "text": "ke", "label": "ce = ke"},
            {"id": "consonant-ci", "text": "ki", "label": "ci = ki"},
            {"id": "consonant-co", "text": "ko", "label": "co = ko"},
            {"id": "consonant-cu", "text": "ku", "label": "cu = ku"},
            {"id": "consonant-ga", "text": "ga", "label": "ga = ga"},
            {"id": "consonant-ge", "text": "ge", "label": "ge = ge"},
            {"id": "consonant-gi", "text": "gi", "label": "gi = gi"},
            {"id": "consonant-go", "text": "go", "label": "go = go"},
            {"id": "consonant-gu", "text": "gu", "label": "gu = gu"},
            {"id": "double-villa", "text": "villa", "label": "vil-la（双辅音 ll）"},
            {"id": "double-terra", "text": "terra", "label": "ter-ra（双辅音 rr）"},
            {"id": "word-lumos", "text": "lumos", "label": "Lumos（荧光闪烁）"},
            {"id": "word-amicus", "text": "amikus", "label": "am-i-cus（朋友）"},
            {"id": "word-dominus", "text": "dominus", "label": "do-mi-nus（主人）"},
            {"id": "word-ceno", "text": "keno", "label": "ce-no（我用餐）"},
            {"id": "word-puella", "text": "puella", "label": "pu-EL-la（女孩）"},
            {"id": "word-nox", "text": "noks", "label": "NO-x（夜）"},
        ]
    },
    2: {
        "name": "第2课 主格与宾格",
        "words": [
            {"id": "puella", "text": "puella", "label": "puella（女孩，主格）"},
            {"id": "puellam", "text": "puellam", "label": "puellam（女孩，宾格）"},
            {"id": "magister", "text": "magister", "label": "ma-gis-ter（老师）"},
            {"id": "cantat", "text": "kantat", "label": "can-tat（他/她唱歌）"},
            {"id": "videt", "text": "widet", "label": "vi-det（他/她看见）"},
            {"id": "amo", "text": "amo", "label": "a-mo（我爱）"},
            {"id": "amas", "text": "amas", "label": "a-mas（你爱）"},
            {"id": "amat", "text": "amat", "label": "a-mat（他/她爱）"},
            {"id": "librum", "text": "librum", "label": "li-brum（书，宾格）"},
            {"id": "legit", "text": "legit", "label": "le-git（他/她读）"},
            {"id": "puella-cantat", "text": "puella kantat", "label": "Puella cantat（女孩唱歌）"},
            {"id": "magister-videt-puellam", "text": "magister widet puellam", "label": "Magister videt puellam"},
        ]
    },
    3: {
        "name": "第3课 第一变位动词",
        "words": [
            {"id": "amare", "text": "amare", "label": "a-ma-re（爱，不定式）"},
            {"id": "amamus", "text": "amamus", "label": "a-ma-mus（我们爱）"},
            {"id": "amatis", "text": "amatis", "label": "a-ma-tis（你们爱）"},
            {"id": "amant", "text": "amant", "label": "a-mant（他们爱）"},
            {"id": "tu-amas", "text": "tu amas", "label": "Tu amas（你爱）"},
            {"id": "nos-amamus", "text": "nos amamus", "label": "Nos amamus（我们爱）"},
            {"id": "amicus-meus", "text": "amikus meus", "label": "amicus meus（我的朋友）"},
        ]
    },
    4: {
        "name": "第4课 形容词变格",
        "words": [
            {"id": "bonus", "text": "bonus", "label": "bo-nus（好的，阳性）"},
            {"id": "bona", "text": "bona", "label": "bo-na（好的，阴性）"},
            {"id": "bonum", "text": "bonum", "label": "bo-num（好的，中性）"},
            {"id": "puer", "text": "puer", "label": "pu-er（男孩）"},
            {"id": "boni-pueri", "text": "boni pueri", "label": "boni pueri（好男孩们）"},
            {"id": "bonas-puellas", "text": "bonas puellas", "label": "bonas puellas（好女孩们）"},
            {"id": "magna-puella", "text": "magna puella", "label": "magna puella（大女孩）"},
            {"id": "parvus-liber", "text": "parwus liber", "label": "parvus liber（小书）"},
        ]
    },
    5: {
        "name": "第5课 句子结构",
        "words": [
            {"id": "caesar", "text": "kajsar", "label": "Cae-sar（凯撒）"},
            {"id": "pontem", "text": "pontem", "label": "pon-tem（桥梁，宾格）"},
            {"id": "aedificat", "text": "ajedifikat", "label": "ae-di-fi-cat（他/她建造）"},
            {"id": "discipulos", "text": "diskipulos", "label": "di-scip-u-los（学生们，宾格）"},
            {"id": "docet", "text": "doket", "label": "do-cet（他/她教）"},
            {"id": "aquila", "text": "akwila", "label": "a-qui-la（鹰）"},
            {"id": "cibum", "text": "kibum", "label": "ci-bum（食物，宾格）"},
            {"id": "capit", "text": "kapit", "label": "ca-pit（他/她抓住）"},
        ]
    },
    6: {
        "name": "第6课 与格",
        "words": [
            {"id": "discipulo", "text": "diskipulo", "label": "di-scip-u-lo（学生，与格）"},
            {"id": "dat", "text": "dat", "label": "dat（他/她给）"},
            {"id": "puellae", "text": "puellaj", "label": "puel-lae（女孩，与格）"},
            {"id": "puero", "text": "puero", "label": "pu-e-ro（男孩，与格）"},
            {"id": "dare", "text": "dare", "label": "da-re（给）"},
            {"id": "credere", "text": "kredere", "label": "cre-de-re（相信）"},
            {"id": "servire", "text": "serwire", "label": "ser-vi-re（服务）"},
            {"id": "tibi", "text": "tibi", "label": "ti-bi（对你）"},
            {"id": "veritatem", "text": "weritatem", "label": "ve-ri-ta-tem（真相，宾格）"},
        ]
    },
    7: {
        "name": "第7课 夺格",
        "words": [
            {"id": "gladio", "text": "gladio", "label": "gla-di-o（剑，夺格）"},
            {"id": "pugnat", "text": "pugnat", "label": "pug-nat（他/她战斗）"},
            {"id": "amico", "text": "amiko", "label": "a-mi-co（朋友，夺格）"},
            {"id": "ambulat", "text": "ambulat", "label": "am-bu-lat（他/她散步）"},
            {"id": "lapis", "text": "lapis", "label": "la-pis（石头）"},
            {"id": "aedificatur", "text": "ajedifikatur", "label": "ae-di-fi-ca-tur（被建造）"},
        ]
    },
    8: {
        "name": "第8课 属格",
        "words": [
            {"id": "magistri", "text": "magistri", "label": "ma-gis-tri（老师的，属格）"},
            {"id": "domus", "text": "domus", "label": "do-mus（房子）"},
            {"id": "regis", "text": "regis", "label": "re-gis（国王的，属格）"},
            {"id": "pueri", "text": "pueri", "label": "pu-e-ri（男孩的，属格）"},
        ]
    },
}


def generate_audio(text, output_path):
    """调用 espeak-ng，拉丁语模式，输出 WAV"""
    cmd = [
        ESPEAK,
        "-v", "la+f3",   # 拉丁语·年轻女声
        "-s", "130",     # 语速（默认175，稍慢便于学习）
        "-p", "50",      # 音调
        "-a", "80",      # 音量
        text,
        "-w", str(output_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(result.stderr or f"espeak-ng 返回码 {result.returncode}")


def generate_lesson(lesson_num):
    if lesson_num not in LESSON_VOCAB:
        print(f"第 {lesson_num} 课的词汇表尚未定义，跳过。")
        return

    lesson = LESSON_VOCAB[lesson_num]
    lesson_dir = OUTPUT_DIR / f"lesson-{lesson_num}"
    lesson_dir.mkdir(parents=True, exist_ok=True)

    print(f"{'='*50}")
    print(f"生成 {lesson['name']} 音频")
    print(f"输出目录: {lesson_dir}")
    print(f"{'='*50}")

    manifest = []

    for i, item in enumerate(lesson["words"]):
        output_file = lesson_dir / f"{item['id']}.wav"
        print(f"  [{i+1}/{len(lesson['words'])}] {item['text']} -> {output_file.name}", end="", flush=True)

        try:
            generate_audio(item["text"], output_file)
            print(" OK")
            manifest.append({
                "id": item["id"],
                "text": item["text"],
                "label": item["label"],
                "file": f"audio/latin/lesson-{lesson_num}/{item['id']}.wav",
            })
        except Exception as e:
            print(f" FAILED: {e}")
            manifest.append({
                "id": item["id"],
                "text": item["text"],
                "label": item["label"],
                "file": None,
                "error": str(e),
            })

    manifest_path = lesson_dir / "manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    success = sum(1 for m in manifest if m.get("file"))
    print(f"\n完成: {success}/{len(lesson['words'])} 个音频文件生成成功")
    print(f"清单已保存: {manifest_path}\n")


def main():
    if not Path(ESPEAK).exists():
        print(f"错误：找不到 espeak-ng：{ESPEAK}")
        print("请先安装：winget install eSpeak-NG.eSpeak-NG")
        sys.exit(1)

    target_lesson = None
    generate_all = False

    if "--all" in sys.argv:
        generate_all = True
    elif "--lesson" in sys.argv:
        idx = sys.argv.index("--lesson")
        if idx + 1 < len(sys.argv):
            target_lesson = int(sys.argv[idx + 1])
    else:
        target_lesson = 1

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    if generate_all:
        for lesson_num in sorted(LESSON_VOCAB.keys()):
            generate_lesson(lesson_num)
    elif target_lesson:
        generate_lesson(target_lesson)
    else:
        print("请指定 --lesson <编号> 或 --all")


if __name__ == "__main__":
    main()
