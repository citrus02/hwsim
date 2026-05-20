/**
 * course-schedule.js
 * 课程表数据访问层
 * 提供课程表数据的统一访问接口
 */

// 直接内联课程表数据，确保最大兼容性
const scheduleData = {
  "version": "1.0.0",
  "description": "霍格沃茨七年制课程表配置",
  "lastUpdated": "2026-05-19",
  "grades": {
    "1": {
      "name": "一年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" },
          { "time": "下午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "夜晚", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "奇洛教授" },
          { "time": "下午", "subject": "飞行课", "icon": "🧹", "prof": "霍琦教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" },
          { "time": "下午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "下午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "奇洛教授" }
        ]
      }
    },
    "2": {
      "name": "二年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "洛哈特教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "洛哈特教授" },
          { "time": "下午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "夜晚", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "飞行课", "icon": "🧹", "prof": "霍琦教授" },
          { "time": "下午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" }
        ]
      }
    },
    "3": {
      "name": "三年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "卢平教授" },
          { "time": "下午", "subject": "占卜学", "icon": "🔮", "prof": "特里劳妮教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "保护神奇动物", "icon": "🦎", "prof": "海格教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" },
          { "time": "下午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "夜晚", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "卢平教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "算术占卜", "icon": "🔢", "prof": "维克多教授" },
          { "time": "下午", "subject": "古代魔文", "icon": "𓂀", "prof": "巴希达教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ]
      }
    },
    "4": {
      "name": "四年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" },
          { "time": "下午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "穆迪教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "占卜学", "icon": "🔮", "prof": "特里劳妮教授" },
          { "time": "下午", "subject": "保护神奇动物", "icon": "🦎", "prof": "海格教授" },
          { "time": "夜晚", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "穆迪教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "算术占卜", "icon": "🔢", "prof": "维克多教授" },
          { "time": "下午", "subject": "古代魔文", "icon": "𓂀", "prof": "巴希达教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ]
      }
    },
    "5": {
      "name": "五年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "乌姆里奇教授" },
          { "time": "下午", "subject": "占卜学", "icon": "🔮", "prof": "特里劳妮教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" },
          { "time": "下午", "subject": "保护神奇动物", "icon": "🦎", "prof": "海格教授" },
          { "time": "夜晚", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "幻影移形", "icon": "💨", "prof": "威斯考特教授" },
          { "time": "下午", "subject": "古代魔文", "icon": "𓂀", "prof": "巴希达教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "乌姆里奇教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" },
          { "time": "下午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯内普教授" }
        ]
      }
    },
    "6": {
      "name": "六年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "魔药学", "icon": "⚗️", "prof": "斯拉格霍恩教授" },
          { "time": "下午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "斯内普教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" },
          { "time": "下午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "保护神奇动物", "icon": "🦎", "prof": "海格教授" },
          { "time": "下午", "subject": "炼金术", "icon": "🥇", "prof": "尼可·勒梅" }
        ],
        "周四": [
          { "time": "上午", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" },
          { "time": "下午", "subject": "古代魔文", "icon": "𓂀", "prof": "巴希达教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯拉格霍恩教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "算术占卜", "icon": "🔢", "prof": "维克多教授" },
          { "time": "下午", "subject": "草药学", "icon": "🌿", "prof": "斯普劳特教授" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "斯内普教授" }
        ]
      }
    },
    "7": {
      "name": "七年级",
      "schedule": {
        "周一": [
          { "time": "上午", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "卡罗教授" },
          { "time": "下午", "subject": "变形术", "icon": "🔁", "prof": "麦格教授" }
        ],
        "周二": [
          { "time": "上午", "subject": "魔药学", "icon": "⚗️", "prof": "斯拉格霍恩教授" },
          { "time": "下午", "subject": "魔咒学", "icon": "✨", "prof": "弗立维教授" }
        ],
        "周三": [
          { "time": "上午", "subject": "魔法史", "icon": "📜", "prof": "宾斯教授" },
          { "time": "下午", "subject": "保护神奇动物", "icon": "🦎", "prof": "海格教授" }
        ],
        "周四": [
          { "time": "上午", "subject": "天文学", "icon": "🌌", "prof": "辛尼斯特拉教授" },
          { "time": "下午", "subject": "炼金术", "icon": "🥇", "prof": "尼可·勒梅" },
          { "time": "夜晚", "subject": "黑魔法防御术", "icon": "🛡️", "prof": "卡罗教授" }
        ],
        "周五": [
          { "time": "上午", "subject": "占卜学", "icon": "🔮", "prof": "特里劳妮教授" },
          { "time": "下午", "subject": "算术占卜", "icon": "🔢", "prof": "维克多教授" },
          { "time": "夜晚", "subject": "魔药学", "icon": "⚗️", "prof": "斯拉格霍恩教授" }
        ]
      }
    }
  }
};

class CourseScheduleManager {
  constructor() {
    this.schedule = scheduleData;
    this.cache = new Map();
    this.validationErrors = [];
  }

  /**
   * 获取指定年级的完整课程表
   * @param {number} grade - 年级编号 (1-7)
   * @returns {Object|null} 年级课程表对象
   */
  getGradeSchedule(grade) {
    const gradeKey = String(grade);
    
    if (this.cache.has(gradeKey)) {
      return this.cache.get(gradeKey);
    }

    const gradeData = this.schedule.grades[gradeKey];
    if (!gradeData) {
      console.warn(`[CourseSchedule] 未找到 ${grade} 年级课程表`);
      return null;
    }

    this.cache.set(gradeKey, gradeData.schedule);
    return gradeData.schedule;
  }

  /**
   * 获取指定年级和周几的课程
   * @param {number} grade - 年级编号 (1-7)
   * @param {string} day - 周几 (周一至周五)
   * @returns {Array} 当天课程列表
   */
  getDaySchedule(grade, day) {
    const gradeSchedule = this.getGradeSchedule(grade);
    if (!gradeSchedule) return [];

    return gradeSchedule[day] || [];
  }

  /**
   * 获取所有支持的年级列表
   * @returns {Array<number>} 年级编号数组
   */
  getSupportedGrades() {
    return Object.keys(this.schedule.grades).map(Number);
  }

  /**
   * 获取年级名称
   * @param {number} grade - 年级编号 (1-7)
   * @returns {string|null} 年级名称
   */
  getGradeName(grade) {
    const gradeKey = String(grade);
    const gradeData = this.schedule.grades[gradeKey];
    return gradeData?.name || null;
  }

  /**
   * 验证课程表数据完整性
   * @returns {Array<string>} 错误列表，空数组表示验证通过
   */
  validateSchedule() {
    const errors = [];
    const requiredDays = ["周一", "周二", "周三", "周四", "周五"];
    const requiredFields = ["time", "subject", "icon", "prof"];

    for (const [grade, gradeData] of Object.entries(this.schedule.grades)) {
      const schedule = gradeData.schedule;
      
      // 检查必填的工作日
      for (const day of requiredDays) {
        if (!schedule[day]) {
          errors.push(`${grade}年级缺少${day}课程安排`);
          continue;
        }

        // 检查每节课的必填字段
        for (let i = 0; i < schedule[day].length; i++) {
          const course = schedule[day][i];
          for (const field of requiredFields) {
            if (!course[field]) {
              errors.push(`${grade}年级${day}第${i + 1}节课缺少${field}字段`);
            }
          }
        }
      }
    }

    this.validationErrors = errors;
    return errors;
  }

  /**
   * 获取配置版本信息
   * @returns {Object} 版本信息对象
   */
  getVersionInfo() {
    return {
      version: this.schedule.version,
      description: this.schedule.description,
      lastUpdated: this.schedule.lastUpdated
    };
  }

  /**
   * 清空缓存
   */
  clearCache() {
    this.cache.clear();
    console.log('[CourseSchedule] 缓存已清空');
  }
}

// 创建单例实例
export const courseScheduleManager = new CourseScheduleManager();

// 默认导出单例
export default courseScheduleManager;
