# Scoring Rules（Day 5）

## 評分公式
`FinalScore = TimeScore + HealthScore + CollectScore + CoinScore + ClearBonus`

## 子分數
- TimeScore：
  - <= 150s: 3000
  - <= 240s: 2200
  - > 240s: 1400
- HealthScore：每剩 1 心 +300（最多 1500）
- CollectScore：每星頁 +500
- CoinScore：每金幣 +10
- ClearBonus：首次通關 +1000

## 評級
- S：>= 7000
- A：>= 5600
- B：>= 4300
- C：< 4300

## 測例
1. 140s / 4 hearts / 3 stars / 40 coins / first clear
   - 3000 + 1200 + 1500 + 400 + 1000 = 7100（S）
2. 220s / 2 hearts / 1 star / 25 coins / repeat clear
   - 2200 + 600 + 500 + 250 + 0 = 3550（C）
3. 245s / 5 hearts / 2 stars / 60 coins / first clear
   - 1400 + 1500 + 1000 + 600 + 1000 = 5500（B）
