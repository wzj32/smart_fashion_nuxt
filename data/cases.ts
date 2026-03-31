export interface SolutionItem {
  id: number
  number: string
  title: string
  detail: string
  image: string
}

export interface StatItem {
  value: string
  label: string
  valueClass: string
  skipHover?: boolean
}

export interface TagItem {
  label: string
  active: boolean
}

export interface MetaItem {
  label: string
  value: string
}

export interface CaseStudy {
  id: string
  title: string
  heroImage: string
  heroLabel: string
  meta: MetaItem[]
  background: string[]
  solutions: SolutionItem[]
  stats: StatItem[]
  tags: TagItem[]
  benefits: string
}

export const cases: CaseStudy[] = [
  {
    id: 'content-review',
    title: '專業知識內容審核系統',
    heroImage: '/shenhe-1.jpg',
    heroLabel: '教育出版',
    meta: [
      { label: '服務 Service', value: 'AI 應用' },
      { label: '產業 Industry', value: '教育, 出版' },
      { label: '關鍵成果 Result', value: '150W+ 下載量' },
    ],
    background: [
      '專業知識內容需要嚴格審查，以確保準確性、完整性與合規性。然而，傳統人工審核方式面臨多項挑戰：',
      '人工審核費時費力，難以跟上大量內容產出',
      '專業領域知識複雜，審核標準難以保持一致性',
      '容易出現疏漏，特別是在複雜的專業文件中',
      '跨領域內容審核需要多專業背景，人力資源成本高',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '多模態內容分析',
        detail: '支持文本、語音、視頻等多種內容格式的輸入，透過高精度 OCR、語音識別與視頻解析技術，將各類媒體內容統一轉換為結構化數據。系統能夠跨媒體格式建立標準化審核流程，確保不同形式的專業內容都能得到一致性的品質把關，大幅提升審核覆蓋範圍與效率。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '專業知識增強型 LLM',
        detail: '基於垂直行業知識庫深度微調的大語言模型，能夠精準理解專業術語、學科概念與領域慣例。結合檢索增強生成（RAG）技術動態調用最新知識庫，確保每次審核決策均符合行業最新標準與法規要求，有效解決通用模型在專業領域判斷力不足的核心痛點。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: '多維度品質評分系統',
        detail: '從準確性、完整性、合規性、可讀性四個核心維度對內容進行量化評分，自動輸出詳細的結構化審核報告。系統透過持續學習識別常見錯誤模式，為內容創作者提供具針對性的改進建議與優化方向，推動專業內容整體品質水準的持續提升。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '審核輔助界面',
        detail: '整合 AI 審核結果與人工複核流程的協作式操作界面，自動高亮顯示潛在問題區域並附加上下文解釋說明。審核人員可快速定位問題、添加標注並觸發修訂流程，人機協作模式將整體審核決策效率提升 8 倍以上，同時有效保留人工判斷對複雜情境的處理能力。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '系統成功實現了專業知識內容審核的高效自動化，不僅大幅提升了審核效率，還顯著降低了內容問題漏檢率。系統投入使用後，審核團隊可以將更多精力集中在需要人工判斷的複雜情境上，顯著提高了整體工作質量。此外，系統的數據分析功能還幫助識別常見內容問題模式，為內容創作者提供了有價值的反饋，促進了專業內容整體品質的提升。',
    stats: [
      { value: '80%', label: '審核效率提升', valueClass: 'text-white' },
      {
        value: '5%',
        label: '內容問題漏檢率降至',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '6%', label: '人力成本降低', valueClass: 'text-white' },
    ],
    tags: [
      { label: '大語言模型', active: false },
      { label: '自然語言處理', active: false },
      { label: '多模態分析', active: true },
      { label: '品質評估算法', active: false },
      { label: 'RAG 技術', active: false },
      { label: '知識圖譜', active: false },
    ],
  },
  {
    id: 'ai-customer-service',
    title: 'AI 智能客服平台',
    heroImage: '/images/mn6tdh0s8MHj5j/rectangle-48.png',
    heroLabel: 'AI 客服',
    meta: [
      { label: '服務 Service', value: 'AI 整合' },
      { label: '產業 Industry', value: '電商, 零售' },
      { label: '關鍵成果 Result', value: '客服成本降低 60%' },
    ],
    background: [
      '隨著業務規模快速增長，傳統人工客服模式已難以應對海量用戶咨詢需求，企業面臨多重痛點：',
      '高峰期客服資源嚴重不足，用戶等待時間過長導致體驗下降',
      '人工客服培訓成本高昂，且服務品質難以保持一致性',
      '7×24 小時不間斷服務需求與人力成本之間的矛盾日益突出',
      '重複性問題佔據大量客服資源，無法聚焦高價值服務場景',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '意圖識別引擎',
        detail: '基於深度學習的自然語言理解模型，能夠精準識別用戶意圖與情緒，準確率高達 96%。支持多輪對話上下文追蹤，理解複雜的複合意圖，並根據對話歷史動態調整回應策略，確保每一次交互都能準確命中用戶真實需求。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '知識庫智能檢索',
        detail: '構建企業專屬知識圖譜，融合產品手冊、政策文件與歷史工單數據，透過語義向量檢索實現毫秒級精準召回。系統支持知識庫自動更新與版本管理，確保客服回答始終基於最新、最準確的企業知識。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: '人機協作無縫轉接',
        detail: '智能研判對話複雜度與用戶情緒，在適當時機平滑轉接人工客服，同步推送完整對話記錄與用戶畫像。人工客服接入後可借助 AI 輔助建議實時提升回應效率，大幅縮短問題解決時長。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '數據洞察儀表板',
        detail: '提供全面的客服數據分析平台，實時追蹤用戶問題趨勢、滿意度評分與服務效率指標。透過熱點問題聚類與根因分析，幫助企業主動優化產品與服務流程，將客服數據轉化為業務增長的戰略資產。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '平台上線後，客戶滿意度評分提升至 4.8 分（滿分 5 分），平均響應時間從 8 分鐘縮短至 12 秒。AI 自動解決率達到 78%，有效分流了大量重複性咨詢，人工客服得以專注於高價值複雜問題的處理。系統 7×24 小時穩定運行，在促銷旺季高峰流量下仍保持服務品質不降，整體客服運營成本降低 60%。',
    stats: [
      { value: '78%', label: 'AI 自動解決率', valueClass: 'text-white' },
      {
        value: '12s',
        label: '平均響應時間',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '60%', label: '運營成本降低', valueClass: 'text-white' },
    ],
    tags: [
      { label: '自然語言處理', active: false },
      { label: '意圖識別', active: true },
      { label: '知識圖譜', active: false },
      { label: '多輪對話', active: false },
      { label: '情感分析', active: false },
    ],
  },
  {
    id: 'enterprise-arch',
    title: '企業系統架構優化',
    heroImage: '/images/mn6tdh0s8MHj5j/rectangle-48.png',
    heroLabel: '企業架構',
    meta: [
      { label: '服務 Service', value: '企業系統' },
      { label: '產業 Industry', value: '金融, 製造' },
      { label: '關鍵成果 Result', value: '系統可用性 99.99%' },
    ],
    background: [
      '隨著業務高速發展，企業原有單體架構逐漸暴露出嚴峻的技術瓶頸，制約了業務的持續增長：',
      '系統耦合度高，單一模組故障導致全系統宕機，可用性無法保障',
      '部署週期長，新功能上線需要數週甚至數月，嚴重滯後於市場需求',
      '擴展能力受限，流量峰值時期系統性能急劇下降，用戶體驗惡化',
      '技術債務持續累積，維護成本居高不下，研發效能低下',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '微服務架構拆分',
        detail: '依據領域驅動設計（DDD）原則，將原有單體應用系統性拆分為 20+ 個獨立微服務。每個服務擁有獨立的代碼倉庫、數據庫與部署流水線，實現真正的服務自治。服務間透過異步消息與 API 網關通信，大幅降低耦合度並提升系統整體韌性。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '混合雲彈性部署',
        detail: '設計私有雲與公有雲的混合架構策略，核心業務數據保留私有雲確保合規安全，計算密集型任務動態調度至公有雲彈性擴容。透過統一的資源調度平台實現跨雲工作負載管理，有效平衡安全合規與靈活擴展的雙重需求。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: 'DevOps 持續交付',
        detail: '建立完整的 CI/CD 流水線體系，從代碼提交到生產部署全程自動化。整合自動化測試、代碼掃描與安全審查環節，確保每次發布品質。藍綠部署與金絲雀發布策略的引入，將系統部署風險降至最低，支持業務功能快速迭代。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '全鏈路可觀測性',
        detail: '搭建覆蓋指標、日誌與鏈路追蹤三位一體的可觀測性平台，實現對系統運行狀態的全方位實時洞察。智能異常檢測與根因分析能力，將平均故障定位時間從小時級壓縮至分鐘級，顯著提升系統穩定性與運維響應效率。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '架構改造完成後，系統可用性從 98.5% 提升至 99.99%，年度故障停機時間不足 1 小時。新功能交付週期從平均 6 週縮短至 3 天，研發效能提升超過 10 倍。系統支持秒級彈性擴容，高峰流量下性能穩定，基礎設施成本透過資源精細化管理降低 35%。',
    stats: [
      { value: '99.99%', label: '系統可用性', valueClass: 'text-white' },
      {
        value: '3天',
        label: '新功能交付週期',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '35%', label: '基礎設施成本降低', valueClass: 'text-white' },
    ],
    tags: [
      { label: '微服務架構', active: true },
      { label: '混合雲部署', active: false },
      { label: 'DevOps', active: false },
      { label: '容器化', active: false },
      { label: '服務網格', active: false },
      { label: '可觀測性', active: false },
    ],
  },
  {
    id: 'realtime-chat',
    title: '即時通訊企業解決方案',
    heroImage: '/images/mn6tdh0s8MHj5j/rectangle-48.png',
    heroLabel: '企業通訊',
    meta: [
      { label: '服務 Service', value: 'Web App' },
      { label: '產業 Industry', value: '企業服務' },
      { label: '關鍵成果 Result', value: '10萬+ 並發用戶' },
    ],
    background: [
      '企業內外部溝通效率直接影響業務推進速度，傳統通訊工具存在諸多局限，亟需突破：',
      '現有 IM 工具缺乏與企業業務系統的深度集成，溝通與業務流程割裂',
      '私有化部署需求與公有 SaaS 服務的數據安全隱患之間的矛盾難以調和',
      '跨平台、跨終端的一致使用體驗難以保障，遠程協作效率低下',
      '音視頻通話質量不穩定，大型在線會議場景下卡頓、掉線問題頻發',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '高性能消息引擎',
        detail: '基於自研分布式消息中間件，採用 WebSocket 長連接與消息推送技術，實現毫秒級消息送達。系統支持單群組萬人同時在線，消息可靠投遞率達 99.999%，歷史消息永久存儲並支持全文檢索，確保重要溝通信息永不丟失。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '業務系統深度集成',
        detail: '提供豐富的開放 API 與 Webhook 機制，支持與 CRM、ERP、工單系統等企業應用的無縫集成。可在對話框內直接發起審批流程、查詢業務數據、創建任務，打通溝通與業務的最後一公里，大幅提升工作流效率。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: '端到端加密安全',
        detail: '採用軍事級端到端加密協議，確保消息在傳輸與存儲全過程中的絕對安全。支持私有化部署模式，數據完全存儲在企業自有基礎設施上，滿足金融、政務等高安全合規場景的嚴苛要求，讓企業對數據擁有完整控制權。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '高清音視頻會議',
        detail: '基於 WebRTC 與自研媒體服務器技術，支持千人規模高清視頻會議，自適應碼率確保弱網環境下的穩定通話質量。集成 AI 降噪、虛擬背景與實時字幕功能，配合屏幕共享與電子白板，打造沉浸式遠程協作體驗。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '平台成功支撐超過 10 萬並發用戶同時在線，消息延遲穩定在 50ms 以內，系統整體可用性達 99.98%。企業內部跨部門協作效率提升 45%，會議召開頻率增加 2 倍的同時，差旅成本降低 40%。私有化部署方案順利通過行業安全合規審查，成功拓展金融、政務等對數據安全要求極高的核心客戶群。',
    stats: [
      { value: '10萬+', label: '並發在線用戶', valueClass: 'text-white' },
      {
        value: '50ms',
        label: '消息平均延遲',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '45%', label: '協作效率提升', valueClass: 'text-white' },
    ],
    tags: [
      { label: 'WebSocket', active: false },
      { label: 'WebRTC', active: false },
      { label: '端到端加密', active: true },
      { label: '分布式架構', active: false },
      { label: '私有化部署', active: false },
    ],
  },
]

export function getCaseById(id: string): CaseStudy | undefined {
  return cases.find(c => c.id === id)
}
