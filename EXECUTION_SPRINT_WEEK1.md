# Scroll Quest — 第 1 週執行稿（正式開始）

> 對應 `GAME_TASK_BREAKDOWN.md` 的 Step 1（第 1 週：定義 + 白盒）。

## 本週總目標
- 完成可對齊開發的 One-pager（願景、範圍、MVP 不做清單）。
- 產出 Stage 1-1 白盒關卡（可走通、可通關）。
- 產出玩家基礎操作規格（跑、跳、二段跳、衝刺）。

---

## Day 1：願景與邊界鎖定

## 任務
1. 建立 One-pager（核心體驗、受眾、平台、賣點）。
2. 定義 MVP 做/不做清單（Must/Should/Won't）。
3. 風險評估第一次盤點（手感、工時、內容範圍）。

## 交付物
- `docs/one_pager.md`
- `docs/mvp_scope.md`
- `docs/risk_log.md`

## 驗收標準
- 任何新加入成員可在 5 分鐘內說出遊戲目標與 MVP 範圍。
- 至少列出 10 項 Won't-do（避免範圍膨脹）。

---

## Day 2：玩家手感規格 + 輸入映射

## 任務
1. 整理玩家控制參數初稿（速度、加速度、跳躍高度）。
2. 定義輸入映射（鍵盤/手掣）。
3. 建立動作狀態圖（Idle/Run/Jump/Fall/Dash/Hurt）。

## 交付物
- `docs/player_controller_spec.md`
- `docs/input_map.md`
- `docs/player_state_machine.md`

## 驗收標準
- 參數可直接抄進引擎（Godot/Unity 任一）使用。
- 狀態圖覆蓋所有主要動作轉移。

---

## Day 3：Stage 1-1 白盒 Blockout

## 任務
1. 白盒主路徑（2–4 分鐘）。
2. 設計 2 個小節奏高峰（跳躍密集段 + 安全回復段）。
3. 放置 1 個終點拱門與觸發區。

## 交付物
- `docs/stage_1_1_blockout.md`
- `docs/stage_1_1_flowchart.md`

## 驗收標準
- 不看提示也可在 3 次內通關。
- 無死路與軟鎖。

---

## Day 4：機關腳本規格（非程式）

## 任務
1. 壓板、拉桿、限時門：定義觸發條件。
2. 書橋機制：定義可放置點、持續時間、冷卻。
3. 終點鐘樓：定義進場條件與通關觸發。

## 交付物
- `docs/mechanic_switch_plate_gate.md`
- `docs/mechanic_book_bridge.md`
- `docs/mechanic_goal_bell.md`

## 驗收標準
- 每個機關都有「輸入 → 條件 → 輸出」格式。
- 可由任一工程師直接實作。

---

## Day 5：UI/HUD 與通關演出規格

## 任務
1. 定義 HUD 結構（生命、金幣、分數、目標）。
2. 定義通關 Banner 動畫時序（10 秒內可跳過）。
3. 定義評分規則（時間、受傷、收藏）。

## 交付物
- `docs/ui_hud_spec.md`
- `docs/ui_chapter_complete_timeline.md`
- `docs/scoring_rules.md`

## 驗收標準
- 設計稿有清楚層級（前景/中景/背景/UI 層）。
- 評分公式可測試（至少 3 組測例）。

---

## Day 6：內部走查與缺口修補

## 任務
1. 團隊走查所有文檔與白盒流程。
2. 列出阻塞項（Blockers）與優先級。
3. 補齊缺失規格。

## 交付物
- `docs/week1_review_minutes.md`
- `docs/blocker_list.md`

## 驗收標準
- 所有 P0 阻塞項都有處理人與完成日期。

---

## Day 7：週結與下週啟動包

## 任務
1. 輸出週報（完成/未完成/風險）。
2. 輸出下週（Week 2）任務包。
3. 確認 Step 2 啟動條件。

## 交付物
- `docs/week1_report.md`
- `docs/week2_kickoff_pack.md`

## 驗收標準
- 週報可直接給外部干係人閱讀。
- Week 2 任務每項都可指派與估點。

---

## 本週 DoD（Definition of Done）
- 文檔齊全且結構一致。
- Stage 1-1 流程可被重現。
- 玩家操作、機關、UI、評分均有可執行規格。

## 本週停點條件（Gate）
若以下任一成立，停止前進 Step 2，先返工：
1. 白盒流程平均通關時間 > 6 分鐘。
2. 有可重現軟鎖。
3. 玩家基本動作仍頻繁誤判（>10%）。
4. UI 或評分公式仍無法落地測試。
