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
    id: 'cloud-architecture',
    title: '雲端架構設計',
    heroImage: '/images/mn6tdh0s8MHj5j/rectangle-48.png',
    heroLabel: '系統架構',
    meta: [
      { label: '服務 Service', value: '企業系統' },
      { label: '產業 Industry', value: '金融, 電商, 製造業' },
      { label: '關鍵成果 Result', value: '系統效能提升 200%' },
    ],
    background: [
      '為企業打造高效能、可擴展、安全可靠的雲端基礎架構，支持企業數位轉型。傳統系統架構面臨多重瓶頸：',
      '傳統架構難以應對業務高速成長帶來的尖峰流量，系統穩定性無法保障',
      '資源配置缺乏彈性，閒置時浪費、高峰時不足，維運成本居高不下',
      '安全防護機制不健全，缺乏完整的災害復原計畫，資料風險難以控管',
      '新技術難以快速整合，部署週期冗長，嚴重滯後於市場競爭需求',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '混合雲架構',
        detail: '結合公有雲的彈性擴展能力與私有雲的安全合規優勢，根據業務需求與資料敏感性靈活選擇部署方式。核心業務數據保留私有雲確保合規，計算密集型任務動態調度至公有雲，實現安全與效能的最佳平衡。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '微服務轉型',
        detail: '依據領域驅動設計原則，將原有單體應用系統性拆分為獨立微服務。搭配 Kubernetes 與 Istio 服務網格，實現服務自治、獨立部署與精細化流量管控，大幅提升系統靈活度與整體韌性。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: '多層安全防護',
        detail: '建立涵蓋網路層、應用層與資料層的全方位安全防護機制，整合 WAF、入侵偵測、加密傳輸與存取控制。完整的災害復原計畫確保 RTO/RPO 達標，讓企業在面對安全威脅時仍能持續穩定運營。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '彈性擴展機制',
        detail: '透過 Terraform 基礎設施即程式碼與 CI/CD 自動化流水線，實現根據負載自動調整資源的彈性架構。Prometheus 與 Grafana 可觀測性平台提供全鏈路監控，部署週期從數週縮短至數小時，維持 99.99% 系統可用率。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '雲端架構上線後，系統效能提升 200%，維運成本降低 60%，部署週期縮短 70%，系統可用率達 99.99%。彈性擴展機制有效應對業務高峰，多層安全防護大幅降低資安風險，企業得以專注核心業務創新，數位轉型進程全面加速。',
    stats: [
      { value: '200%', label: '系統效能提升', valueClass: 'text-white' },
      {
        value: '99.99%',
        label: '系統可用率',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '60%', label: '維運成本降低', valueClass: 'text-white' },
    ],
    tags: [
      { label: 'Kubernetes', active: false },
      { label: '混合雲', active: true },
      { label: '微服務', active: false },
      { label: 'CI/CD', active: false },
      { label: '可觀測性', active: false },
    ],
  },
  {
    id: 'edu-simulation',
    title: 'AI 教育訓練模擬系統',
    heroImage: '/images/mn6tdh0s8MHj5j/rectangle-48.png',
    heroLabel: 'AI 應用',
    meta: [
      { label: '服務 Service', value: 'AI 應用' },
      { label: '產業 Industry', value: '企業培訓, 教育' },
      { label: '關鍵成果 Result', value: '培訓成本降低 50%' },
    ],
    background: [
      '透過大語言模型創建虛擬角色，讓學員進行逼真的互動式培訓，取代傳統高成本的人力培訓方式。傳統培訓模式面臨多項挑戰：',
      '傳統角色扮演培訓需大量真人講師配合，人力成本高昂且難以規模化部署',
      '培訓場景固定，缺乏個性化學習機制，無法針對不同學員調整訓練內容',
      '學員實際練習機會受限，難以在安全環境中反覆演練高壓情境',
      '培訓成效依賴主觀評估，缺乏客觀量化指標追蹤學習進度',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: 'AI 角色扮演模擬',
        detail: '透過預設人格特質與行為模式，利用大語言模型創建多樣化的虛擬互動角色。學員可與 AI 角色進行真實感十足的對話演練，模擬各種客戶類型、應對情境與突發狀況，在零風險環境中累積寶貴的實戰經驗。',
        image: '/images/mn6tdh0s8MHj5j/rectangle-49.png',
      },
      {
        id: 2,
        number: '02.',
        title: '情境腳本生成器',
        detail: '根據培訓目標自動生成不同難度層級的場景與對話內容，涵蓋新人入門到資深進階的完整培訓路徑。系統可針對零售服務、企業談判、醫療溝通等不同行業場景客製化腳本，大幅降低課程開發時間與成本。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-43.png',
      },
      {
        id: 3,
        number: '03.',
        title: '即時反饋機制',
        detail: '系統即時分析學員的對話表現，從語氣、邏輯結構、關鍵詞使用等多個維度提供客觀評估報告。每次演練結束後自動生成詳細的改進建議，幫助學員快速識別弱點，針對性強化訓練效果。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-44.png',
      },
      {
        id: 4,
        number: '04.',
        title: '自適應學習路徑',
        detail: '根據學員的學習進度與表現數據，動態調整訓練難度與練習重點。系統智能識別學員的薄弱環節並自動強化相關場景練習，確保每位學員都能以最有效率的路徑達成培訓目標，整體學習效果最大化。',
        image: '/images/mn6sgmdo6ocCMY/rectangle-45.png',
      },
    ],
    benefits: '系統上線後，企業培訓成本降低 50%，學員學習效果提升 45%，練習機會增加 300%，學員整體滿意度達 85%。AI 模擬培訓打破時間與場地限制，學員可隨時隨地進行反覆演練，大幅縮短新人到達戰力所需時間，同時為管理層提供可視化的培訓成效數據。',
    stats: [
      { value: '50%', label: '培訓成本降低', valueClass: 'text-white' },
      {
        value: '300%',
        label: '練習機會增加',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '45%', label: '學習效果提升', valueClass: 'text-white' },
    ],
    tags: [
      { label: '大語言模型', active: false },
      { label: 'AI 角色扮演', active: true },
      { label: '自然語言處理', active: false },
      { label: '自適應學習', active: false },
      { label: '情境模擬', active: false },
    ],
  },
  {
    id: 'vet-ai',
    title: 'AI 輔助獸醫系統',
    heroImage: '/shouyi.jpg',
    heroLabel: 'AI 應用',
    meta: [
      { label: '服務 Service', value: 'AI 應用' },
      { label: '產業 Industry', value: '獸醫, 寵物照護' },
      { label: '關鍵成果 Result', value: '診斷時間縮短 35%' },
    ],
    background: [
      '運用 AI 技術輔助寵物診斷，提升獸醫診療效率與寵物主體驗。傳統獸醫診療模式面臨多重挑戰：',
      '寵物無法表達症狀，導致診斷複雜度高，獸醫需耗費大量時間進行問診',
      '獸醫人力不足，候診時間過長，影響寵物就醫體驗與診療品質',
      '寵物品種多樣化，不同品種的疾病表現差異大，診斷標準難以統一',
      '專業術語與飼主溝通存在障礙，飼主難以理解診療結果與後續照護指引',
      '偏遠地區獸醫資源稀缺，寵物無法及時獲得專科診療服務',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '智能病歷預覽',
        detail: 'AI 自動萃取歷次就診紀錄的關鍵資訊，整合症狀描述、檢驗數值與用藥歷史，生成結構化病歷摘要。獸醫在問診前即可快速掌握寵物完整健康背景，大幅縮短病史蒐集時間，專注於當次診療的核心判斷。',
        image: '/shouyi_2.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '症狀診斷輔助',
        detail: '基於獸醫專業 LLM 與 RAG 技術，結合圖像識別與行為分析，對症狀進行多維度數據分析並提供診斷參考建議。系統持續學習最新獸醫文獻與臨床案例，輔助獸醫提升診斷準確性，降低罕見疾病漏診風險。',
        image: '/shouyi_3.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '飼主知識解釋器',
        detail: '將複雜的專業獸醫術語自動轉化為淺顯易懂的說明，生成個性化的照護建議與衛教內容。飼主能清楚理解診斷結果、用藥方式與居家護理要點，有效提升醫病溝通品質與飼主對診療方案的配合度。',
        image: '/shouyi_4.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: '遠程會診服務',
        detail: '透過線上會診平台連結偏遠地區與都市專科獸醫資源，飼主可上傳影像、描述症狀並獲得遠程專業建議。配合隱私保護設計確保寵物與飼主資料安全，讓優質獸醫服務突破地域限制，提升偏鄉醫療可及性。',
        image: '/shouyi_5.jpg',
      },
    ],
    benefits: '系統上線後，獸醫診斷時間縮短 35%，飼主滿意度提升 40%，病史分析效率提升 45%。遠程會診服務有效提升偏遠地區醫療可及性達 30%，讓更多寵物能夠獲得及時專業的診療服務。AI 輔助診斷功能幫助獸醫降低漏診風險，整體診療品質與醫院營運效率均顯著改善。',
    stats: [
      { value: '35%', label: '診斷時間縮短', valueClass: 'text-white' },
      {
        value: '40%',
        label: '飼主滿意度提升',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '45%', label: '病史分析效率提升', valueClass: 'text-white' },
    ],
    tags: [
      { label: '大語言模型', active: false },
      { label: 'RAG 技術', active: true },
      { label: '圖像識別', active: false },
      { label: '行為分析', active: false },
      { label: '遠程會診', active: false },
    ],
  },
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
    title: '24/7 AI 智能客服',
    heroImage: '/24_7.jpg',
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
        image: '/24_7_2.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '知識庫智能檢索',
        detail: '構建企業專屬知識圖譜，融合產品手冊、政策文件與歷史工單數據，透過語義向量檢索實現毫秒級精準召回。系統支持知識庫自動更新與版本管理，確保客服回答始終基於最新、最準確的企業知識。',
        image: '/24_7_3.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '人機協作無縫轉接',
        detail: '智能研判對話複雜度與用戶情緒，在適當時機平滑轉接人工客服，同步推送完整對話記錄與用戶畫像。人工客服接入後可借助 AI 輔助建議實時提升回應效率，大幅縮短問題解決時長。',
        image: '/24_7_4.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: '數據洞察儀表板',
        detail: '提供全面的客服數據分析平台，實時追蹤用戶問題趨勢、滿意度評分與服務效率指標。透過熱點問題聚類與根因分析，幫助企業主動優化產品與服務流程，將客服數據轉化為業務增長的戰略資產。',
        image: '/24_7_5.jpg',
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
    title: 'IM SaaS 即時通訊平台',
    heroImage: '/IM.jpg',
    heroLabel: 'IM 服務',
    meta: [
      { label: '服務 Service', value: 'SaaS 產品' },
      { label: '產業 Industry', value: '電商, 社交, 企業協作' },
      { label: '關鍵成果 Result', value: '訊息延遲 <200ms' },
    ],
    background: [
      '企業自建即時通訊系統面臨高成本與高複雜度的雙重挑戰，傳統開發模式難以為繼：',
      '開發即時通訊系統需投入大量工程資源，長連接、訊息同步、離線推送等技術門檻極高',
      '高併發場景下的系統穩定性與彈性擴展難以保證，尖峰時段易出現訊息延遲與丟失',
      '多平台 SDK 維護管理複雜，Web、iOS、Android 各端需分別開發，成本倍增',
      '訊息安全性與資料合規要求嚴格，企業難以在自建系統中落實完整的安全防護',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '完整多平台 SDK',
        detail: '提供 Web、iOS、Android 多平台 SDK，搭配預建 React / Vue UI 組件，企業可在數小時內完成整合上線。完善的開發文件與範例程式碼大幅降低接入門檻，讓工程團隊專注於核心業務邏輯而非底層通訊實現。',
        image: '/IM_2.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '企業級通訊功能',
        detail: '支援一對一私聊、群組聊天、已讀回條、打字指示器、訊息收回與編輯等完整功能。底層採用 WebSocket + Redis Pub/Sub 架構，訊息延遲穩定在 200ms 以內，系統可用性達 99.9%，確保企業級通訊場景的穩定運作。',
        image: '/IM_3.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '多媒體與檔案服務',
        detail: '支援圖片、檔案、語音等多媒體訊息傳送，搭配 S3 相容物件儲存實現高可用的媒體資源管理。完整的訊息歷史記錄與全文檢索功能，確保重要溝通內容永久保存且隨時可查，滿足企業合規留存需求。',
        image: '/IM_4.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: 'AI 加值功能',
        detail: '整合智能回覆建議、對話摘要、內容審核與 RAG 知識庫等 AI 功能，大幅提升客服與協作效率。支援雲端託管與私有化部署兩種模式，企業可依資料安全需求靈活選擇，滿足金融、政務等高合規場景需求。',
        image: '/IM_5.jpg',
      },
    ],
    benefits: 'IM SaaS 平台幫助企業將即時通訊整合週期從數月縮短至數小時，大幅降低研發成本。系統可用性 99.9%，訊息延遲穩定在 200ms 以內，支援雲端與私有化雙模式部署，成功服務電商、社交、企業協作與客服等多元場景客戶，AI 加值功能進一步強化平台差異化競爭優勢。',
    stats: [
      { value: '99.9%', label: '系統可用性', valueClass: 'text-white' },
      {
        value: '<200ms',
        label: '訊息延遲',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '3', label: '多平台 SDK 支援', valueClass: 'text-white' },
    ],
    tags: [
      { label: 'WebSocket', active: false },
      { label: 'WebRTC', active: false },
      { label: '端到端加密', active: true },
      { label: '分布式架構', active: false },
      { label: '私有化部署', active: false },
    ],
  },
  {
    id: 'hsing-penglai',
    title: '興蓬萊',
    heroImage: '/yupenglai.jpeg',
    heroLabel: '餐飲業',
    meta: [
      { label: '服務 Service', value: '數位化平台' },
      { label: '產業 Industry', value: '餐飲服務業' },
      { label: '關鍵成果 Result', value: '米其林餐盤推薦' },
    ],
    background: [
      '興蓬萊台菜餐廳為台北知名米其林餐盤推薦餐廳，隨著品牌持續成長，傳統線下營運模式已難以滿足現代消費者需求：',
      '訂位流程仰賴電話人工處理，尖峰時段接線困難，訂位體驗不佳',
      '菜單更新與期間限定餐點資訊難以即時傳遞給消費者',
      '缺乏線上銷售渠道，品牌商品與伴手禮無法觸及更廣泛客群',
      '多門市資訊分散，無統一數位入口整合品牌形象與服務',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '線上訂位系統',
        detail: '建置完整的線上訂位平台，消費者可隨時選擇門市、日期、人數進行預約，系統自動確認並發送通知。有效分流電話訂位壓力，讓餐廳人員能專注於現場服務品質，大幅提升訂位流程效率與顧客體驗。',
        image: '/yu.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '數位菜單展示',
        detail: '打造結構化數位菜單系統，涵蓋吉祥合菜、如意單點及期間限定三大分類，支援圖文並茂的菜品展示。菜單內容可即時更新，確保消費者隨時掌握最新餐點資訊，有效提升到店前的消費決策與期待感。',
        image: '/yu_2.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '線上電商購物平台',
        detail: '整合電商購物功能，消費者可線上選購品牌商品與伴手禮，搭配購物車與帳號系統提供流暢的購買體驗。打破地域限制，將品牌影響力從實體門市延伸至線上通路，開拓全新營收來源。',
        image: '/yu_3.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: '響應式多語言網站',
        detail: '採用 Nuxt.js 框架開發，支援繁體中文與英文雙語介面，完整適配桌機與行動裝置。整合 Facebook、Instagram、LINE 官方帳號等社群渠道，建立統一的品牌數位入口，強化國際旅客與本地消費者的雙向觸及。',
        image: '/yu_4.jpg',
      },
    ],
    benefits: '數位化平台上線後，興蓬萊成功整合訂位、菜單、電商與品牌形象於單一網站，大幅降低人工訂位作業負擔，並透過線上購物渠道拓展品牌商品銷售。多語言設計有效服務國際來台旅客，配合米其林餐盤推薦的品牌定位，進一步鞏固高端台菜餐廳的市場形象。',
    stats: [
      { value: '2', label: '門市整合管理', valueClass: 'text-white' },
      {
        value: '3',
        label: '菜單分類即時更新',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '2', label: '多語言介面支援', valueClass: 'text-white' },
    ],
    tags: [
      { label: 'Nuxt.js', active: true },
      { label: '響應式設計', active: false },
      { label: '線上訂位', active: false },
      { label: '電商系統', active: false },
      { label: '多語言', active: false },
    ],
  },
  {
    id: 'wifi-rental',
    title: '台灣租借WiFi',
    heroImage: '/zujie.png',
    heroLabel: '電信服務',
    meta: [
      { label: '服務 Service', value: 'Web App' },
      { label: '產業 Industry', value: '電信, 網路通訊' },
      { label: '關鍵成果 Result', value: '集團用戶突破 2,000 萬' },
    ],
    background: [
      '無限全球通移動通信股份有限公司提供行動 WiFi 分享器租借服務，面對快速成長的短期網路需求市場，傳統人工訂單處理模式面臨多項挑戰：',
      '租借流程複雜，客戶需透過電話或實體門市辦理，轉換成本高',
      '多種租期方案與領還方式難以在線下統一管理與即時更新',
      '企業多台租借需求與個人用戶需求差異大，缺乏彈性化服務介面',
      '訂單追蹤與出貨狀態不透明，客戶體驗有待提升',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '線上租借預訂系統',
        detail: '建置完整的線上預訂平台，支援最短 1 日起租、彈性 1-30 日租期選擇。客戶可自主選擇宅配、桃園/高雄機場櫃檯或親臨辦公室等多元領還方式，系統自動計算費用並產生訂單，大幅降低人工處理成本。',
        image: '/zuji_3.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '自動化訂單管理',
        detail: '整合訂單狀態追蹤、出貨通知與自動延長機制，超期租借自動延長無需繁雜手續。後台系統即時同步庫存與出貨資訊，確保每筆訂單準確處理，最快當天出貨，提升客戶對服務的信賴度。',
        image: '/zujie_2.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '企業多台租借方案',
        detail: '針對企業用戶設計批量租借功能，支援多台同時申請與統一帳單管理。提供中華電信吃到飽方案與 4G 無線路由器選項，滿足商旅、展覽、活動等不同企業場景的網路需求，有效開拓 B2B 市場。',
        image: '/zujie_4.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: '響應式官網與 SEO 優化',
        detail: '打造適配各裝置的響應式官網，清晰呈現服務方案、費率比較與使用說明。透過 SEO 優化提升搜尋引擎能見度，配合即插即用的產品特性強化品牌信任感，有效吸引國內外短期網路需求用戶。',
        image: '/zujie_5.jpg',
      },
    ],
    benefits: '平台上線後，集團累計服務用戶突破 2,000 萬人，線上訂單佔比大幅提升，人工處理成本顯著降低。多元領還方式與自動化流程有效提升客戶滿意度，企業多台租借方案成功拓展 B2B 客群，鞏固品牌在台灣行動 WiFi 租借市場的領導地位。',
    stats: [
      { value: '2000萬+', label: '集團累計用戶', valueClass: 'text-white' },
      {
        value: '1日',
        label: '最短起租天數',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '3', label: '領還方式', valueClass: 'text-white' },
    ],
    tags: [
      { label: '響應式設計', active: false },
      { label: '訂單管理系統', active: true },
      { label: 'SEO 優化', active: false },
      { label: '電商整合', active: false },
      { label: '企業方案', active: false },
    ],
  },
  {
    id: 'global-wifi',
    title: 'GLOBAL WiFi',
    heroImage: '/wifi.jpg',
    heroLabel: '旅遊通訊',
    meta: [
      { label: '服務 Service', value: 'Web App' },
      { label: '產業 Industry', value: '旅遊, 通訊科技' },
      { label: '關鍵成果 Result', value: '多國適用彈性方案' },
    ],
    background: [
      'GLOBAL WiFi 提供出國旅客便攜式 WiFi 分享器租借服務，隨著出境旅遊市場快速復甦，傳統通訊服務模式面臨數位化轉型壓力：',
      '旅客出國前網路方案選擇繁雜，難以快速比較各國費率與方案差異',
      '取貨流程不夠彈性，旅客無法依行程自由選擇機場、宅配或門市領取',
      '缺乏多語言支援，無法有效服務日、韓等非華語旅客市場',
      '訂單管理與設備追蹤仰賴人工處理，運營效率有待提升',
    ],
    solutions: [
      {
        id: 1,
        number: '01.',
        title: '多國方案比較系統',
        detail: '建置智慧化方案比較平台，旅客輸入目的地與旅遊天數後，系統自動推薦最適合的費率方案。清晰的價格比較表與方案說明，幫助旅客在數秒內完成決策，有效提升訂單轉換率。',
        image: '/wifi_2.jpg',
      },
      {
        id: 2,
        number: '02.',
        title: '彈性取還貨系統',
        detail: '整合機場取貨、宅配到府、門市自取與當地取貨四大渠道，旅客可依行程彈性選擇最便利的領取與歸還方式。系統自動分配倉儲排程與物流資源，確保每筆訂單準時出貨、零漏失。',
        image: '/wifi_3.jpg',
      },
      {
        id: 3,
        number: '03.',
        title: '多語言介面設計',
        detail: '支援繁體中文、日文、韓文多語言介面，針對不同市場旅客提供在地化的使用體驗。語言切換流暢，幫助品牌有效拓展日、韓客群，大幅提升非華語旅客的訂單完成率。',
        image: '/wifi_4.jpg',
      },
      {
        id: 4,
        number: '04.',
        title: '線上預訂與帳號管理',
        detail: '建置完整的會員系統與線上預訂流程，旅客可管理歷史訂單、儲存常用資料與快速重複訂購。後台整合訂單狀態追蹤與設備管理，大幅降低客服詢問量，提升整體運營效率。',
        image: '/wifi_5.jpg',
      },
    ],
    benefits: '平台上線後，GLOBAL WiFi 成功整合多國方案展示、彈性取貨流程與多語言服務於單一平台，訂單轉換率顯著提升。多語言支援有效開拓日、韓旅客市場，彈性取還貨系統降低人工調度成本，品牌在出境旅遊 WiFi 租借市場建立起差異化的數位競爭優勢。',
    stats: [
      { value: '4', label: '取還貨渠道', valueClass: 'text-white' },
      {
        value: '3',
        label: '多語言介面支援',
        valueClass: 'bg-[linear-gradient(90deg,rgba(82,85,238,1)_0%,rgba(255,255,255,1)_55%,rgba(60,180,217,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent',
        skipHover: true,
      },
      { value: '多國', label: '適用目的地', valueClass: 'text-white' },
    ],
    tags: [
      { label: '響應式設計', active: false },
      { label: '多語言', active: true },
      { label: '線上預訂', active: false },
      { label: '會員系統', active: false },
      { label: '物流整合', active: false },
    ],
  },
]

export function getCaseById(id: string): CaseStudy | undefined {
  return cases.find(c => c.id === id)
}
