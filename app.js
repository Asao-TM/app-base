const fields = {
  appIdea: document.getElementById("appIdea"),
  niche: document.getElementById("niche"),
  refApps: document.getElementById("refApps"),
  tiktok: document.getElementById("tiktok"),
  instagram: document.getElementById("instagram"),
  youtube: document.getElementById("youtube"),
  onboarding: document.getElementById("onboarding"),
  marketingHours: document.getElementById("marketingHours"),
  buildHours: document.getElementById("buildHours"),
};

const postStatus = document.getElementById("postStatus");
const timeStatus = document.getElementById("timeStatus");
const planOutput = document.getElementById("planOutput");
const generateBtn = document.getElementById("generateBtn");

function updatePostStatus() {
  const total = [fields.tiktok, fields.instagram, fields.youtube]
    .map((el) => Number(el.value) || 0)
    .reduce((a, b) => a + b, 0);

  postStatus.textContent = `今日の投稿数: ${total} / 21`;
  postStatus.style.color = total >= 21 ? "#45d483" : "#4ba3ff";
}

function updateTimeStatus() {
  const marketing = Number(fields.marketingHours.value) || 0;
  const build = Number(fields.buildHours.value) || 0;
  const total = marketing + build;
  const ratio = total === 0 ? 0 : Math.round((marketing / total) * 100);

  timeStatus.textContent = `マーケ比率: ${ratio}%`;
  timeStatus.style.color = ratio >= 90 ? "#45d483" : "#ffb347";
}

function generatePlan() {
  const appIdea = fields.appIdea.value.trim() || "（未入力）";
  const niche = fields.niche.value.trim() || "（未入力）";
  const refApps = fields.refApps.value.trim() || "（未入力）";
  const onboarding = fields.onboarding.value.trim() || "（未入力）";
  const posts = Number(fields.tiktok.value || 0) + Number(fields.instagram.value || 0) + Number(fields.youtube.value || 0);

  const output = [
    `【今日の最重要目標】`,
    `${appIdea} を ${niche} 向けに磨き込む。`,
    "",
    "【競合リサーチ】",
    `参考アプリ: ${refApps}`,
    "- 成功要素を1つ模倣 + 1つ独自要素を追加する",
    "",
    "【集客】",
    `- 本日の投稿実績: ${posts}/21本`,
    "- 明日の投稿はフック・台本・CTAを先にテンプレ化する",
    "",
    "【オンボーディング改善】",
    onboarding,
    "",
    "【次アクション】",
    "1. 最初の60秒体験を1つだけ改善する",
    "2. 投稿導線からアプリ登録までの離脱率を確認する",
    "3. ユーザーフィードバックを3件集めて改善に反映する",
  ].join("\n");

  planOutput.textContent = output;
}

[fields.tiktok, fields.instagram, fields.youtube].forEach((el) => el.addEventListener("input", updatePostStatus));
[fields.marketingHours, fields.buildHours].forEach((el) => el.addEventListener("input", updateTimeStatus));
generateBtn.addEventListener("click", generatePlan);

updatePostStatus();
updateTimeStatus();
