import { SavedMenu } from "../types";

/**
 * Danh sách 6 Thực đơn Đề cử (Chuẩn Dinh Dưỡng Học Đường) cố định cho cả tuần.
 * Nguồn dữ liệu độc lập, không bị ảnh hưởng hay phụ thuộc vào danh sách thực đơn do người dùng lưu/xóa.
 */
export const RECOMMENDED_MENUS: SavedMenu[] = [
  {
    "budgetPerChild": 35000,
    "updatedAt": "15/9/2026",
    "childrenCount": 57,
    "id": "menu_1789470312863",
    "meals": [
      {
        "id": "meal_sáng",
        "dishes": [
          {
            "ingredients": [
              {
                "ingredientId": "tinh_bot_21",
                "quantityPerChild": 80
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 25
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 3
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "rau_cu_qua_04",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_06"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 1000,
                "ingredientId": "custom_1789384528938"
              },
              {
                "ingredientId": "custom_1789470264181",
                "quantityPerChild": 42
              }
            ],
            "name": "Bánh lọt thịt bằm",
            "id": "dish_sáng_t2"
          }
        ],
        "name": "Bữa sáng chính (07:30)"
      },
      {
        "id": "meal_trưa",
        "name": "Bữa trưa dinh dưỡng (10:30)",
        "dishes": [
          {
            "id": "dish_cơm_t2",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ],
            "name": "Cơm tẻ dẻo mầm non"
          },
          {
            "id": "dish_mặn_t2",
            "ingredients": [
              {
                "quantityPerChild": 60,
                "ingredientId": "sua_trung_02"
              },
              {
                "quantityPerChild": 4,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_07"
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              }
            ],
            "name": "Trứng chiên hành hoa"
          },
          {
            "id": "dish_canh_t2",
            "ingredients": [
              {
                "ingredientId": "rau_cu_qua_03",
                "quantityPerChild": 40
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "custom_1789383832717",
                "quantityPerChild": 12
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              }
            ],
            "name": "Canh rau cải ngọt tép khô"
          },
          {
            "id": "dish_tráng_miệng_t2",
            "ingredients": [
              {
                "ingredientId": "trai_cay_01",
                "quantityPerChild": 60
              }
            ],
            "name": "Tráng miệng: Chuối chín"
          }
        ]
      },
      {
        "name": "Bữa phụ xế chiều (14:30)",
        "dishes": [
          {
            "id": "dish_xế_t2",
            "ingredients": [
              {
                "quantityPerChild": 45,
                "ingredientId": "tinh_bot_01"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 3
              },
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "rau_cu_qua_04",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "rau_cu_qua_23",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_06"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "quantityPerChild": 30,
                "ingredientId": "thit_thuy_san_22"
              }
            ],
            "name": "Cháo thịt heo nạc thơm ngon"
          }
        ],
        "id": "meal_xế_chiều"
      }
    ],
    "name": "Thứ 2",
    "ageGroup": "lop_ghep"
  },
  {
    "meals": [
      {
        "name": "Bữa sáng chính (07:30)",
        "dishes": [
          {
            "ingredients": [
              {
                "quantityPerChild": 50,
                "ingredientId": "tinh_bot_07"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "thit_thuy_san_22"
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 1000,
                "ingredientId": "custom_1789384528938"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              }
            ],
            "name": "Bún thịt bằm ấm nóng",
            "id": "dish_sáng_t3"
          }
        ],
        "id": "meal_sáng"
      },
      {
        "id": "meal_trưa",
        "dishes": [
          {
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ],
            "id": "dish_cơm_t3",
            "name": "Cơm tẻ dẻo mầm non"
          },
          {
            "id": "dish_mặn_t3",
            "name": "Thịt kho su su tàu hủ",
            "ingredients": [
              {
                "ingredientId": "thit_thuy_san_20",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 3
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 40
              },
              {
                "ingredientId": "rau_cu_qua_23",
                "quantityPerChild": 40
              }
            ]
          },
          {
            "id": "dish_canh_t3",
            "name": "Canh bí đỏ thịt gà",
            "ingredients": [
              {
                "ingredientId": "rau_cu_qua_05",
                "quantityPerChild": 40
              },
              {
                "ingredientId": "thit_thuy_san_06",
                "quantityPerChild": 12
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              }
            ]
          },
          {
            "ingredients": [
              {
                "quantityPerChild": 70,
                "ingredientId": "trai_cay_04"
              }
            ],
            "name": "Tráng miệng: Dưa hấu ngọt",
            "id": "dish_tráng_miệng_t3"
          }
        ],
        "name": "Bữa trưa dinh dưỡng (10:30)"
      },
      {
        "dishes": [
          {
            "id": "dish_xế_t3",
            "name": "Mì gói thịt bằm",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_10",
                "quantityPerChild": 40
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "thit_thuy_san_22"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "rau_cu_qua_04",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_06"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              }
            ]
          }
        ],
        "name": "Bữa phụ xế chiều (14:30)",
        "id": "meal_xế_chiều"
      }
    ],
    "childrenCount": 57,
    "budgetPerChild": 35000,
    "ageGroup": "lop_ghep",
    "name": "Thứ 3",
    "id": "menu_1789471345693",
    "updatedAt": "15/9/2026"
  },
  {
    "meals": [
      {
        "name": "Bữa sáng chính (07:30)",
        "id": "meal_sáng",
        "dishes": [
          {
            "ingredients": [
              {
                "ingredientId": "tinh_bot_22",
                "quantityPerChild": 80
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 25
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 3
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1.5
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_17"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 1000,
                "ingredientId": "custom_1789384528938"
              }
            ],
            "id": "dish_sáng_t4",
            "name": "Mì tươi thịt bằm dẻo ngon"
          }
        ]
      },
      {
        "dishes": [
          {
            "name": "Cơm tẻ dẻo mầm non",
            "id": "dish_cơm_t4",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ]
          },
          {
            "id": "dish_mặn_t4",
            "name": "Cá sốt cà chua",
            "ingredients": [
              {
                "ingredientId": "rau_cu_qua_07",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 4
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "custom_1789382789071",
                "quantityPerChild": 50
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              }
            ]
          },
          {
            "id": "dish_canh_t4",
            "ingredients": [
              {
                "quantityPerChild": 40,
                "ingredientId": "rau_cu_qua_11"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "quantityPerChild": 10,
                "ingredientId": "custom_1789383832717"
              }
            ],
            "name": "Canh bắp cải tôm khô"
          },
          {
            "ingredients": [
              {
                "quantityPerChild": 65,
                "ingredientId": "trai_cay_07"
              }
            ],
            "id": "dish_tráng_miệng_t4",
            "name": "Tráng miệng: Táo đỏ ngọt"
          }
        ],
        "name": "Bữa trưa dinh dưỡng (10:30)",
        "id": "meal_trưa"
      },
      {
        "name": "Bữa phụ xế chiều (14:30)",
        "dishes": [
          {
            "name": "Cháo cá",
            "id": "dish_xế_t4",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 45
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_07"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "ingredientId": "rau_cu_qua_17",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_06"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "tinh_bot_15",
                "quantityPerChild": 10
              },
              {
                "ingredientId": "custom_1789400763638",
                "quantityPerChild": 20
              }
            ]
          }
        ],
        "id": "meal_xế_chiều"
      }
    ],
    "id": "menu_1789472193676",
    "updatedAt": "15/9/2026",
    "ageGroup": "lop_ghep",
    "budgetPerChild": 35000,
    "childrenCount": 57,
    "name": "Thứ 4"
  },
  {
    "meals": [
      {
        "dishes": [
          {
            "ingredients": [
              {
                "quantityPerChild": 45,
                "ingredientId": "tinh_bot_23"
              },
              {
                "quantityPerChild": 25,
                "ingredientId": "thit_thuy_san_22"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 3
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_17"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_06"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "ingredientId": "custom_1789384528938",
                "quantityPerChild": 1000
              },
              {
                "ingredientId": "custom_1789472604546",
                "quantityPerChild": 25
              }
            ],
            "id": "dish_sáng_t5",
            "name": "Hủ tiếu thịt bằm miền Nam"
          }
        ],
        "name": "Bữa sáng chính (07:30)",
        "id": "meal_sáng"
      },
      {
        "dishes": [
          {
            "id": "dish_cơm_t5",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ],
            "name": "Cơm tẻ dẻo mầm non"
          },
          {
            "ingredients": [
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 4
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_07"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1.5
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "tinh_bot_04"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "custom_1789401370498"
              }
            ],
            "id": "dish_mặn_t5",
            "name": "Bò kho khoai tây"
          },
          {
            "ingredients": [
              {
                "ingredientId": "rau_cu_qua_10",
                "quantityPerChild": 40
              },
              {
                "quantityPerChild": 12,
                "ingredientId": "thit_thuy_san_06"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              }
            ],
            "name": "Canh rau mồng tơi thịt gà",
            "id": "dish_canh_t5"
          },
          {
            "ingredients": [
              {
                "quantityPerChild": 60,
                "ingredientId": "trai_cay_06"
              }
            ],
            "name": "Tráng miệng: Xoài chín cát chu",
            "id": "dish_tráng_miệng_t5"
          }
        ],
        "id": "meal_trưa",
        "name": "Bữa trưa dinh dưỡng (10:30)"
      },
      {
        "name": "Bữa phụ xế chiều (14:30)",
        "id": "meal_xế_chiều",
        "dishes": [
          {
            "name": "Nui thịt gà ",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_19",
                "quantityPerChild": 40
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "thit_thuy_san_06"
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_17"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              }
            ],
            "id": "dish_xế_t5"
          }
        ]
      }
    ],
    "budgetPerChild": 35000,
    "updatedAt": "15/9/2026",
    "name": "Thứ 5",
    "childrenCount": 57,
    "ageGroup": "lop_ghep",
    "id": "menu_1789473102104"
  },
  {
    "budgetPerChild": 35000,
    "updatedAt": "15/9/2026",
    "name": "Thứ 6",
    "meals": [
      {
        "dishes": [
          {
            "ingredients": [
              {
                "ingredientId": "tinh_bot_08",
                "quantityPerChild": 50
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 15
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 1.5,
                "ingredientId": "gia_vi_03"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "ingredientId": "custom_1789384528938",
                "quantityPerChild": 1000
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              }
            ],
            "name": "Phở thịt bằm thơm lừng",
            "id": "dish_sáng_t6"
          }
        ],
        "name": "Bữa sáng chính (07:30)",
        "id": "meal_sáng"
      },
      {
        "dishes": [
          {
            "name": "Cơm tẻ dẻo mầm non",
            "id": "dish_cơm_t6",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ]
          },
          {
            "id": "dish_mặn_t6",
            "ingredients": [
              {
                "quantityPerChild": 25,
                "ingredientId": "rau_cu_qua_06"
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 30
              }
            ],
            "name": "Thịt kho bí đao thanh mát"
          },
          {
            "ingredients": [
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 2
              },
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "custom_1789386576097",
                "quantityPerChild": 28
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "ingredientId": "custom_1789383832717",
                "quantityPerChild": 4
              }
            ],
            "id": "dish_canh_t6",
            "name": "Canh khoai mỡ tôm khô đậm đà"
          },
          {
            "name": "Tráng miệng: Lê đường giòn ngọt",
            "ingredients": [
              {
                "ingredientId": "trai_cay_13",
                "quantityPerChild": 65
              }
            ],
            "id": "dish_tráng_miệng_t6"
          }
        ],
        "name": "Bữa trưa dinh dưỡng (10:30)",
        "id": "meal_trưa"
      },
      {
        "dishes": [
          {
            "name": "Cháo tôm",
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 45
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "quantityPerChild": 11,
                "ingredientId": "thit_thuy_san_12"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "rau_cu_qua_05",
                "quantityPerChild": 10
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              }
            ],
            "id": "dish_xế_t6"
          }
        ],
        "name": "Bữa phụ xế chiều (14:30)",
        "id": "meal_xế_chiều"
      }
    ],
    "id": "menu_1789473662094",
    "ageGroup": "lop_ghep",
    "childrenCount": 57
  },
  {
    "budgetPerChild": 35000,
    "updatedAt": "15/9/2026",
    "ageGroup": "lop_ghep",
    "id": "menu_1789474421769",
    "meals": [
      {
        "id": "meal_sáng",
        "name": "Bữa sáng chính (07:30)",
        "dishes": [
          {
            "name": "Bún thịt bằm mầm non cuối tuần",
            "ingredients": [
              {
                "quantityPerChild": 50,
                "ingredientId": "tinh_bot_07"
              },
              {
                "quantityPerChild": 25,
                "ingredientId": "thit_thuy_san_22"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1.5
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_04"
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "custom_1789384528938",
                "quantityPerChild": 1000
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              },
              {
                "quantityPerChild": 3,
                "ingredientId": "chat_beo_01"
              }
            ],
            "id": "dish_sáng_t7"
          }
        ]
      },
      {
        "id": "meal_trưa",
        "dishes": [
          {
            "ingredients": [
              {
                "ingredientId": "tinh_bot_01",
                "quantityPerChild": 70
              }
            ],
            "name": "Cơm tẻ dẻo mầm non",
            "id": "dish_cơm_t7"
          },
          {
            "ingredients": [
              {
                "quantityPerChild": 1,
                "ingredientId": "gia_vi_03"
              },
              {
                "ingredientId": "thit_thuy_san_22",
                "quantityPerChild": 30
              },
              {
                "quantityPerChild": 30,
                "ingredientId": "sua_trung_03"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "chat_beo_01"
              }
            ],
            "id": "dish_mặn_t7",
            "name": "Thịt kho trứng cút"
          },
          {
            "id": "dish_canh_t7",
            "name": "Canh củ dền thịt gà ta đỏ mọng",
            "ingredients": [
              {
                "quantityPerChild": 10,
                "ingredientId": "thit_thuy_san_06"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "quantityPerChild": 30,
                "ingredientId": "custom_1789387659028"
              },
              {
                "ingredientId": "gia_vi_11",
                "quantityPerChild": 2
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 1
              }
            ]
          },
          {
            "id": "dish_tráng_miệng_t7",
            "name": "Tráng miệng: Chuối tiêu ngọt",
            "ingredients": [
              {
                "ingredientId": "trai_cay_02",
                "quantityPerChild": 30
              }
            ]
          }
        ],
        "name": "Bữa trưa dinh dưỡng (10:30)"
      },
      {
        "id": "meal_xế_chiều",
        "name": "Bữa phụ xế chiều (14:30)",
        "dishes": [
          {
            "name": "Miến thịt gà xé nhỏ thơm ngon",
            "ingredients": [
              {
                "quantityPerChild": 40,
                "ingredientId": "tinh_bot_24"
              },
              {
                "quantityPerChild": 25,
                "ingredientId": "thit_thuy_san_06"
              },
              {
                "ingredientId": "gia_vi_03",
                "quantityPerChild": 1
              },
              {
                "ingredientId": "rau_cu_qua_04",
                "quantityPerChild": 20
              },
              {
                "ingredientId": "tinh_bot_06",
                "quantityPerChild": 20
              },
              {
                "quantityPerChild": 2,
                "ingredientId": "gia_vi_11"
              },
              {
                "quantityPerChild": 20,
                "ingredientId": "rau_cu_qua_23"
              },
              {
                "ingredientId": "chat_beo_01",
                "quantityPerChild": 1
              },
              {
                "ingredientId": "custom_1789474193059",
                "quantityPerChild": 35
              }
            ],
            "id": "dish_xế_t7"
          }
        ]
      }
    ],
    "childrenCount": 57,
    "name": "Thứ 7"
  }
];
