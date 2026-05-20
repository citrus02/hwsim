// potion-brew-steps.js - strict brewing step construction and validation
import { materialProcessingMap } from './potion-data.js';

export const STIR_CIRCLES = 3;

export function buildPotionSteps(potion) {
  if (!potion) return [];
  const steps = [];
  potion.materials.forEach(m => {
    if (materialProcessingMap[m]) {
      steps.push({
        type: 'process',
        material: m,
        action: materialProcessingMap[m].action,
        verb: materialProcessingMap[m].processVerb,
        result: materialProcessingMap[m].resultName
      });
    } else {
      steps.push({ type: 'add', material: m });
    }
  });
  steps.push({ type: 'stir', count: STIR_CIRCLES });
  return steps;
}

export function getStepAt(steps, currentStepIndex) {
  if (currentStepIndex >= steps.length) return null;
  return steps[currentStepIndex];
}

export function getStepViolationMessage(step, actionType, material, action) {
  if (!step) return '没有步骤了，药液变得浑浊不堪...';

  if (step.type === 'stir' && actionType !== 'stir') {
    return '你打乱了制作顺序！坩埚冒出刺鼻的绿烟...';
  }

  if (step.type === 'process') {
    if (actionType === 'add' && material === step.material) {
      return `${step.material}需要先${step.verb}！直接丢进去导致药液沸腾喷溅！`;
    }
    if (actionType === 'process' && material === step.material && action === step.action) {
      return null;
    }
    if (actionType === 'process' && material === step.material && action !== step.action) {
      return `处理方式错误！应该${step.verb}${step.material}，你的操作让材料彻底毁了`;
    }
    if (actionType === 'process' && material !== step.material) {
      return `步骤错误！当前应该先处理${step.material}，而不是${material}`;
    }
  }

  if (step.type === 'add') {
    if (actionType === 'process') {
      return `${material}不需要处理！直接加入坩埚即可`;
    }
    if (actionType === 'add' && material === step.material) {
      return null;
    }
    if (actionType === 'add' && material !== step.material) {
      return `步骤错误！当前应该加入${step.material}，而不是${material}`;
    }
  }

  return '步骤混乱！药液变得浑浊不堪...';
}
