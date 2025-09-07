// quiz-data.js
// 題目與老師偏好（可自行編輯維護）

window.quizData = {
  // 問卷題目（multiple: true 代表可複選）
  questions: [
    {
      id: "basic_Info",
      title: "基本資訊",
      multiple: false,
      fields: [
        { 
          type: "text", 
          id: "name", 
          label: "姓名", 
          placeholder: "例如：王小明" 
        },
        { 
          type: "radio", 
          id: "gender", 
          label: "性別", 
          options: ["男", "女", "其他"] 
        },
        { 
          type: "text", 
          id: "job", 
          label: "職業", 
          placeholder: "例如：學生/新豐高中" 
        },
        { 
          type: "text", 
          id: "contact", 
          label: "聯絡方式（電話 / FB / Line / IG 擇二）",
          placeholder: "例如：0912345678/ IG:room2music" 
        }
      ]
    },
    {
      id: 1,
      title: "樂器種類",
      multiple: false,
      isInstrument: true, 
      options: ["電吉他", "木吉他", "Bass", "Keyboard", "爵士鼓", "主唱"]
    },
    {
      id: 2,
      title: "你的年齡",
      multiple: false,
      options: ["14歲以下", "15~17歲", "18~22歲", "23~30歲", "30歲以上"]
    },
    {
      id: 3,
      title: "是否有學過",
      multiple: false,
      options: ["沒有學過", "有自學過一點點", "有跟老師學過1年內", "有跟老師學過1~3年以上", "有跟老師學超過3年"]
    },
    {
      id: 4,
      title: "喜歡的音樂風格（可複選）",
      multiple: true,
      options: ["Metal", "Punk", "Funk", "Jazz", "藍調", "日搖或動漫音樂", "K-Pop", "台灣樂團", "華語流行音樂"]
    },
    {
      id: 5,
      title: "上課的學習需求（可複選）",
      multiple: true,
      options: ["有特別想學的歌", "想把樂器練好", "想要進階學習更專業的演奏", "想練習自彈自唱"]
    },
    {
      id: 6,
      title: "希望老師的上課方式（可複選）",
      multiple: true,
      options: [
        "每堂課都會檢查進度",
        "希望老師多講有趣的事",
        "希望老師陪同練習",
        "希望老師不要一直唸我沒練習",
        "拜託老師幫我抓譜",
        "希望老師有固定的教材(課本)"
      ]
    },
    {
      id: 7,
      title: "希望的上課時段（可複選）",
      multiple: true,
      // 你未提供時段清單，我先放常見選項；不影響現有配對（目前老師偏好沒填第7題）
      options: ["平日白天", "平日晚上", "週末白天", "週末晚上"]
    },
    {
      id: 8,
      title: "是否能夠週固定上課",
      multiple: false,
      options: ["可能會很常請假", "可能會有事調課", "我是認真的學生會每週上課"]
    },
    {
      id: 9,
      title: "是否有特別指定老師的性別",
      multiple: false,
      options: ["男", "女", "都可以"]
    },
    {
      id: "note_field",
      title: "其他備註",
      multiple: false,
      fields: [
        { type: "textarea", id: "note", label: "備註（可留空）" }
    ]
    }
 
  ],

  // 老師清單 + 偏好（數字從 1 起算，對應每一題的選項）
  teachers: [
    // 電吉他
    {
      id: "chen",
      name: "陳志穎",
      instrument: "電吉他",
      gender: "男", //（可選，用不到也行）
      photo: "../../photo/jimmy.jpeg",
      preferences: {
        1: [1, 2],
        2: [2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [2, 3, 4, 5, 7, 8],
        5: [1, 2, 3],
        6: [1, 2, 3, 4],
        8: [3],
        9: [1, 3]
      }
    },
    {
      id: "lu",
      name: "陸久溜",
      instrument: "電吉他",
      gender: "男",
      photo: "../../photo/久溜.png",
      preferences: {
        1: [1, 2],
        2: [2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 5, 6, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "yangy",
      name: "楊堯鈞",
      instrument: "電吉他",
      gender: "男",
      photo: "../../photo/堯鈞.png",
      preferences: {
        1: [1, 2],
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4],
        4: [2, 3, 5, 6, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "yangq",
      name: "楊齊",
      instrument: "電吉他",
      gender: "男",
      photo: "../../photo/楊齊.png",
      preferences: {
        1: [1, 2, 3],
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4],
        4: [2, 3, 8, 9],
        5: [1, 2],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },

    // 木吉他
    {
      id: "fish",
      name: "小魚",
      instrument: "木吉他",
      gender: "女",
      photo: "../../photo/fish.jpg",
      preferences: {
        1: [2],
        2: [1, 2, 3, 4],
        3: [1, 2, 3],
        4: [2, 3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
        // --- Bass ---
    {
      id: "xiaoha",
      name: "小哈",
      instrument: "Bass",
      gender: "男",
      photo: "../../photo/xiaoha.jpg",
      preferences: {
        1: [3],
        2: [2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 5, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "syc",
      name: "孫宥丞",
      instrument: "Bass",
      gender: "男",
      photo: "../../photo/syc.png",
      preferences: {
        1: [3],
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4],
        4: [1, 2, 3, 6, 7, 8],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "hmj",
      name: "黃名璟",
      instrument: "Bass",
      gender: "男",
      photo: "../../photo/hmj.jpg",
      preferences: {
        1: [3],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },

    // --- 爵士鼓 ---
    {
      id: "leaf",
      name: "小葉",
      instrument: "爵士鼓",
      gender: "男",
      photo: "../../photo/leaf.png",
      preferences: {
        1: [5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "wsh",
      name: "溫士宏",
      instrument: "爵士鼓",
      gender: "男",
      photo: "../../photo/wsh.jpeg",
      preferences: {
        1: [5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 6, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "xcheng",
      name: "小陳",
      instrument: "爵士鼓",
      gender: "男",
      photo: "../../photo/xcheng.jpg",//尚未拿到圖片
      preferences: {
        1: [5],
        2: [2, 3, 4],
        3: [1, 2, 3, 4],
        4: [1, 2, 3, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },
    {
      id: "kay",
      name: "Kay",
      instrument: "爵士鼓",
      gender: "女",
      photo: "../../photo/kay.jpg",//尚未拿到圖片
      preferences: {
        1: [5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [3, 4, 5, 7, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 6],
        8: [2, 3],
        9: [2, 3]
      }
    },
    {
      id: "ruxin",
      name: "如歆",
      instrument: "爵士鼓",
      gender: "女",
      photo: "../../photo/ruxin.jpeg",
      preferences: {
        1: [5],
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4],
        4: [2, 3, 5, 6, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
    // 主唱
    {
      id: "xiaoyi",
      name: "小奕",
      instrument: "主唱",
      gender: "女",
      photo: "../../photo/xiaoyi.png",
      preferences: {
        1: [6],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4],
        4: [3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [2, 3],
        9: [2, 3]
      }
    },
    {
      id: "qianshu",
      name: "芊樹",
      instrument: "主唱",
      gender: "女",
      photo: "../../photo/qianshu.jpeg",
      preferences: {
        1: [6],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [2, 3, 4, 5, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
    {
      id: "wenwen",
      name: "問問",
      instrument: "主唱",
      gender: "女",
      photo: "../../photo/wenwen.png",
      preferences: {
        1: [6],
        2: [1, 2, 3],
        3: [1, 2, 3, 4],
        4: [1, 2, 5, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
    {
      id: "pinyan",
      name: "品彥",
      instrument: "主唱",
      gender: "男",
      photo: "../../photo/pinyan.jpg",
      preferences: {
        1: [6],
        2: [2, 3, 4, 5],
        3: [1, 2, 3, 4],
        4: [1, 2, 5, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [1, 3]
      }
    },

    // Keyboard
    {
      id: "xiaowen",
      name: "小雯",
      instrument: "Keyboard",
      gender: "女",
      photo: "../../photo/xiaowen.jpg",
      preferences: {
        1: [4],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4],
        4: [5, 6, 7, 8, 9],
        5: [1, 2, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
    {
      id: "deyu",
      name: "德毓",
      instrument: "Keyboard",
      gender: "男",
      photo: "../../photo/deyu.jpg",//尚未拿到照片
      preferences: {
        1: [4],
        2: [2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 3],
        6: [1, 2, 3, 4, 5, 6],
        8: [2, 3],
        9: [1, 3]
      }
    },
    {
      id: "wangjing",
      name: "王淨",
      instrument: "Keyboard",
      gender: "女",
      photo: "../../photo/wangjing.png",
      preferences: {
        1: [4],
        2: [1, 2, 3, 4],
        3: [1, 2, 3, 4],
        4: [1, 2, 3, 6, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5],
        8: [1, 2, 3],
        9: [2, 3]
      }
    },
    {
      id: "yizhen",
      name: "以真",
      instrument: "Keyboard",
      gender: "女",
      photo: "../../photo/yizhen.jpg",//尚未拿到照片
      preferences: {
        1: [4],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
        4: [1, 3, 4, 5, 6, 7, 8, 9],
        5: [1, 2, 3, 4],
        6: [1, 2, 3, 4, 5, 6],
        8: [1, 2, 3],
        9: [2, 3]
      }
    }

    
  ]
};


