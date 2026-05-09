# Player Controller Spec（Day 2）

## 目標
建立可直接實作的玩家控制參數，先追求「準確 + 可預期」。

## 核心參數（初版）
- Move Speed: `220 px/s`
- Ground Acceleration: `1800 px/s²`
- Ground Deceleration: `2200 px/s²`
- Air Acceleration: `1100 px/s²`
- Jump Velocity: `-420 px/s`
- Double Jump Velocity: `-390 px/s`
- Gravity: `1250 px/s²`
- Fall Gravity Multiplier: `1.25`
- Coyote Time: `0.10 s`
- Jump Buffer: `0.12 s`
- Dash Speed: `420 px/s`
- Dash Duration: `0.16 s`
- Dash Cooldown: `0.45 s`
- Hurt Knockback X: `180 px/s`
- Hurt Knockback Y: `-220 px/s`
- Invulnerable Time: `0.65 s`

## 行為規則
1. 地面轉向：速度不可瞬間反轉，需經減速再加速。
2. 長按跳躍可更高（Variable Jump）：
   - 若在 `0.12 s` 內放開跳躍鍵，立刻降低上升速度 35%。
3. 衝刺期間無重力影響，但不可穿牆。
4. 受傷狀態不可衝刺，0.2 秒後恢復輸入。

## 驗收測試
- 10 次固定距離跳台成功率 >= 90%。
- 連續衝刺冷卻行為與 UI 提示一致。
- 受傷後無敵時間內不重複扣血。
