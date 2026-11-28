/* =========================================================
   Budi 的台詞（印尼文＋中文）
   ========================================================= */
var LINES = {
  hello:    { id: 'Halo! Nama saya Budi. Hari ini hari pertama saya kerja di sini.', zh: '你好！我是 Budi，今天是我第一天上班。' },
  login:    { id: 'Ini akun baru saya. Bisa bantu saya masuk? Saya mau pakai bahasa Indonesia.', zh: '這是我的新帳號，可以幫我登入嗎？我想用印尼文。' },
  loginOk:  { id: 'Berhasil masuk! Terima kasih.', zh: '登入成功！謝謝你。' },
  manual:   { id: 'Hmm… buku panduan ini semuanya bahasa Mandarin. Saya tidak mengerti…', zh: '嗯……這本手冊全是中文，我看不太懂耶。' },
  help:     { id: 'Bisa bantu saya? Kita cari pakai tablet itu, yuk.', zh: '可以幫我嗎？我們用那台平板查查看。' },
  found:    { id: 'Oh, begitu! JM150-DC itu mesin cetak dua warna!', zh: '原來如此！JM150-DC 是雙色射出成型機！' },
  cncQ:     { id: 'Di catatan ini cuma tertulis DEMO-CNC-01…', zh: '便條上只寫了 DEMO-CNC-01……' },
  cncA:     { id: 'Area A1, ya. Saya ke sana sekarang!', zh: '原來在 A1 區，我現在過去！' },
  defectQ:  { id: 'Sampel ini ada goresan di tepinya. Apa saja yang harus saya tulis?', zh: '這個樣品邊緣有刮痕，回報要寫什麼？' },
  defectA:  { id: 'Kode alat, waktu, deskripsi, foto, kontak. Siap!', zh: '設備代號、時間、描述、照片、聯絡人。了解！' },
  handQ:    { id: 'Sebentar lagi ganti shift. Apa yang harus saya serahkan?', zh: '快換班了，我要交接哪些事？' },
  handA:    { id: 'Oke, semuanya saya tulis di formulir serah terima.', zh: '好，我全部寫進交接表。' },
  alarmQ:   { id: 'Layar JM150-DC menampilkan alarm…', zh: 'JM150-DC 的螢幕跳出警報了……' },
  alarm:    { id: 'Catatannya tidak ada. Saya tanya teknisi senior dulu, ya.', zh: '查不到紀錄。我先去問老師傅好了。' },
  master:   { id: 'Pak Wang merekam pengalamannya. Nanti saya cari lagi.', zh: '王師傅把經驗錄下來了，等一下我再查一次。' },
  thanks:   { id: 'Ketemu! Terima kasih! Lain kali, teman lain juga bisa menemukannya.', zh: '查到了！謝謝你！下次別人遇到，也查得到了。' },
  bye:      { id: 'Hari pertama selesai. Sampai besok!', zh: '第一天結束了，明天見！' },
  poke1:    { id: 'Ya? Ada apa?', zh: '嗯？怎麼了？' },
  poke2:    { id: 'Hehe, saya masih belajar.', zh: '嘿嘿，我還在學。' },
  poke3:    { id: 'Mesin di sini besar sekali!', zh: '這裡的機器好大台！' },
  book:     { id: 'Wah, buku ini tebal sekali…', zh: '哇，這本書好厚喔……' },
  tablet:   { id: 'Ayo, kita pakai tablet ini!', zh: '來，我們用這台平板查！' },
  sample:   { id: 'Lihat, ada goresan di sini.', zh: '你看，這裡有一道刮痕。' },
  machine:  { id: 'Itu JM150-DC, mesin dua warna.', zh: '那台是 JM150-DC，雙色射出機。' },
  idle:     { id: 'Kita lanjut?', zh: '我們繼續嗎？' }
};

/* =========================================================
   平板介面文字（繁中／印尼文／越南文）
   ========================================================= */
var T = {
  zh: {
    langName: '繁體中文', app: '知識管理系統', appSub: '工廠知識管理與傳承系統', os: 'Knowledge OS',
    account: '帳號', password: '密碼', language: '語言', login: '登入', demoNote: '新進員工展示帳號・實際系統部署在公司內網',
    navDash: '儀表板', navChat: 'AI 助手', navUp: '上傳知識', navKb: '知識庫',
    titleChat: 'AI 知識助手', titleUp: '上傳知識', titleKb: '知識庫',
    roleNew: '新進員工', roleMaster: '資深技術員',
    welcome: '歡迎回來，Budi！', myRole: '我的角色', prefLang: '偏好語言', status: '帳號狀態', active: '啟用中',
    quick: '快速操作', qaChat: 'AI 助手', qaChatS: '用自己的語言提問', qaKb: '瀏覽知識庫', qaKbS: '查看所有知識資產',
    qaUp: '上傳知識', qaUpS: '新增文件、影片、圖片或語音', qaMine: '個人上傳紀錄', qaMineS: '查看個人知識與審批結果',
    newChat: '新對話', today: '今天', emptyT: '歡迎體驗智慧聊天', emptyP: '請從左側選擇既有對話，或直接輸入訊息開始新對話。',
    you: '你', ai: 'AI 助手', send: '送出', placeholder: '輸入你的問題，或上傳機台照片',
    fine1: '可直接上傳機台照片，不必填寫描述；每次最多三張，每張 5 MB。', fine2: 'AI 可能會產生錯誤資訊，請核對重要內容。',
    logH: '處理紀錄', log1: '正在搜尋知識庫與機台資料…', log2: '已核對目前可用的資料：', log3: '採用來源：', log3none: '採用來源：無',
    log4: '正在依來源整理回答…', log5: '回答完成，可點選引用核對來源。', log5none: '回答完成：知識庫中沒有相關資料。',
    srcs: '參考來源', back: '返回對話', kbAll: '所有知識', version: '版本', approved: '已核准', pending: '待審核', machine: '關聯機台',
    unknown: '展示版只收錄 Budi 今天會問的問題，請點選下方的建議問題。',
    upBanner: '示範：這一段切換成王師傅的帳號。', upTitle: '標題', upMachine: '關聯機台', upType: '類型',
    tDoc: '文件', tVideo: '影片', tImg: '圖片', tVoice: '語音', recording: '錄音中', recorded: '錄音完成',
    asrH: '語音轉文字（繁體中文）', submit: '送出審核', reviewH: '審核進度',
    st1: '上傳語音', st2: '語音轉文字', st3: '品質主管審核', st4: '核准上線', st3s: '等待主管確認', st4s: 'v1・可被 AI 引用',
    again: '換回 Budi 的帳號，再查一次'
  },
  id: {
    langName: 'Bahasa Indonesia', app: 'Sistem Manajemen Pengetahuan', appSub: 'Pengelolaan & pewarisan pengetahuan pabrik', os: 'Knowledge OS',
    account: 'Akun', password: 'Kata sandi', language: 'Bahasa', login: 'Masuk', demoNote: 'Akun demo karyawan baru・sistem asli ada di jaringan internal',
    navDash: 'Dasbor', navChat: 'Asisten AI', navUp: 'Unggah', navKb: 'Basis pengetahuan',
    titleChat: 'Asisten Pengetahuan AI', titleUp: 'Unggah pengetahuan', titleKb: 'Basis pengetahuan',
    roleNew: 'Karyawan baru', roleMaster: 'Teknisi senior',
    welcome: 'Selamat datang kembali, Budi!', myRole: 'Peran saya', prefLang: 'Bahasa pilihan', status: 'Status akun', active: 'Aktif',
    quick: 'Aksi cepat', qaChat: 'Asisten AI', qaChatS: 'Bertanya dengan bahasa sendiri', qaKb: 'Basis pengetahuan', qaKbS: 'Lihat semua aset pengetahuan',
    qaUp: 'Unggah pengetahuan', qaUpS: 'Dokumen, video, gambar, atau suara', qaMine: 'Unggahan saya', qaMineS: 'Lihat pengetahuan & hasil persetujuan',
    newChat: 'Obrolan baru', today: 'Hari ini', emptyT: 'Selamat mencoba obrolan pintar', emptyP: 'Pilih obrolan di kiri, atau ketik pesan untuk mulai.',
    you: 'Anda', ai: 'Asisten AI', send: 'Kirim', placeholder: 'Ketik pertanyaan atau unggah foto mesin',
    fine1: 'Bisa langsung unggah foto mesin tanpa deskripsi; maks. 3 foto, 5 MB per foto.', fine2: 'AI bisa keliru. Periksa kembali informasi penting.',
    logH: 'Catatan proses', log1: 'Mencari di basis pengetahuan dan data mesin…', log2: 'Data yang diperiksa:', log3: 'Sumber yang dipakai:', log3none: 'Sumber yang dipakai: tidak ada',
    log4: 'Menyusun jawaban dari sumber…', log5: 'Selesai. Klik kutipan untuk memeriksa sumber.', log5none: 'Selesai: tidak ada data terkait di basis pengetahuan.',
    srcs: 'Sumber', back: 'Kembali ke obrolan', kbAll: 'Semua pengetahuan', version: 'Versi', approved: 'Disetujui', pending: 'Menunggu', machine: 'Mesin terkait',
    unknown: 'Versi demo hanya berisi pertanyaan Budi hari ini. Silakan pilih pertanyaan yang disarankan di bawah.',
    upBanner: 'Demo: bagian ini memakai akun Pak Wang.', upTitle: 'Judul', upMachine: 'Mesin terkait', upType: 'Jenis',
    tDoc: 'Dokumen', tVideo: 'Video', tImg: 'Gambar', tVoice: 'Suara', recording: 'Merekam', recorded: 'Rekaman selesai',
    asrH: 'Suara ke teks (bahasa Mandarin)', submit: 'Kirim untuk ditinjau', reviewH: 'Proses persetujuan',
    st1: 'Unggah suara', st2: 'Suara ke teks', st3: 'Ditinjau kepala mutu', st4: 'Disetujui & aktif', st3s: 'Menunggu konfirmasi', st4s: 'v1・bisa dikutip AI',
    again: 'Kembali ke akun Budi dan cari lagi'
  },
  vi: {
    langName: 'Tiếng Việt', app: 'Hệ thống quản lý tri thức', appSub: 'Quản lý và truyền thừa tri thức nhà máy', os: 'Knowledge OS',
    account: 'Tài khoản', password: 'Mật khẩu', language: 'Ngôn ngữ', login: 'Đăng nhập', demoNote: 'Tài khoản demo nhân viên mới・hệ thống thật nằm trong mạng nội bộ',
    navDash: 'Bảng điều khiển', navChat: 'Trợ lý AI', navUp: 'Tải lên', navKb: 'Kho tri thức',
    titleChat: 'Trợ lý tri thức AI', titleUp: 'Tải lên tri thức', titleKb: 'Kho tri thức',
    roleNew: 'Nhân viên mới', roleMaster: 'Kỹ thuật viên lâu năm',
    welcome: 'Chào mừng trở lại, Budi!', myRole: 'Vai trò', prefLang: 'Ngôn ngữ ưu tiên', status: 'Trạng thái', active: 'Đang hoạt động',
    quick: 'Thao tác nhanh', qaChat: 'Trợ lý AI', qaChatS: 'Hỏi bằng ngôn ngữ của bạn', qaKb: 'Kho tri thức', qaKbS: 'Xem toàn bộ tài sản tri thức',
    qaUp: 'Tải lên tri thức', qaUpS: 'Tài liệu, video, hình ảnh hoặc giọng nói', qaMine: 'Tải lên của tôi', qaMineS: 'Xem tri thức và kết quả duyệt',
    newChat: 'Cuộc trò chuyện mới', today: 'Hôm nay', emptyT: 'Chào mừng đến với trò chuyện thông minh', emptyP: 'Chọn cuộc trò chuyện bên trái, hoặc nhập tin nhắn để bắt đầu.',
    you: 'Bạn', ai: 'Trợ lý AI', send: 'Gửi', placeholder: 'Nhập câu hỏi hoặc tải ảnh máy lên',
    fine1: 'Có thể tải ảnh máy lên mà không cần mô tả; tối đa 3 ảnh, mỗi ảnh 5 MB.', fine2: 'AI có thể sai. Hãy kiểm tra lại nội dung quan trọng.',
    logH: 'Nhật ký xử lý', log1: 'Đang tìm trong kho tri thức và dữ liệu máy…', log2: 'Đã đối chiếu dữ liệu hiện có:', log3: 'Nguồn được dùng:', log3none: 'Nguồn được dùng: không có',
    log4: 'Đang tổng hợp câu trả lời theo nguồn…', log5: 'Đã xong, bấm vào trích dẫn để đối chiếu nguồn.', log5none: 'Đã xong: kho tri thức không có dữ liệu liên quan.',
    srcs: 'Nguồn tham khảo', back: 'Quay lại trò chuyện', kbAll: 'Tất cả tri thức', version: 'Phiên bản', approved: 'Đã duyệt', pending: 'Chờ duyệt', machine: 'Máy liên quan',
    unknown: 'Bản demo chỉ có các câu hỏi của Budi hôm nay. Vui lòng chọn câu hỏi gợi ý bên dưới.',
    upBanner: 'Demo: đoạn này dùng tài khoản của chú Vương.', upTitle: 'Tiêu đề', upMachine: 'Máy liên quan', upType: 'Loại',
    tDoc: 'Tài liệu', tVideo: 'Video', tImg: 'Hình ảnh', tVoice: 'Giọng nói', recording: 'Đang ghi âm', recorded: 'Đã ghi âm',
    asrH: 'Giọng nói thành chữ (tiếng Trung)', submit: 'Gửi duyệt', reviewH: 'Tiến độ duyệt',
    st1: 'Tải giọng nói lên', st2: 'Chuyển giọng nói thành chữ', st3: 'Trưởng chất lượng duyệt', st4: 'Duyệt và đưa vào dùng', st3s: 'Chờ xác nhận', st4s: 'v1・AI có thể trích dẫn',
    again: 'Đổi lại tài khoản Budi và hỏi lại'
  }
};

/* =========================================================
   知識庫文件（示範資料）
   ========================================================= */
var DOCS = {
  mk6: { no: 3, title: '[DEMO] JM150-MK6 單色射出成型機 - 機台資料', machine: 'JM150-MK6',
    zh: ['JM150-MK6：單色射出成型機。', '一次射出一種塑料，生產單色零件。', '與 JM150-DC 的手冊外觀相似，請以機台銘牌型號為準。'],
    id: ['JM150-MK6: mesin cetak injeksi satu warna.', 'Menyuntikkan satu jenis plastik untuk komponen satu warna.', 'Buku panduannya mirip JM150-DC. Selalu cocokkan dengan pelat nama mesin.'],
    vi: ['JM150-MK6: máy ép nhựa một màu.', 'Ép một loại nhựa để làm chi tiết một màu.', 'Sổ tay giống JM150-DC, hãy đối chiếu với bảng tên trên máy.'] },
  dc: { no: 4, title: '[DEMO] JM150-DC 雙色射出成型機 - 機台資料', machine: 'JM150-DC',
    zh: ['JM150-DC：雙色射出成型機。', '兩種塑料依序射入同一副模具，可生產軟硬雙色零件，例如電動工具手柄。'],
    id: ['JM150-DC: mesin cetak injeksi dua warna.', 'Dua jenis plastik disuntikkan berurutan ke cetakan yang sama, misalnya untuk gagang perkakas listrik.'],
    vi: ['JM150-DC: máy ép nhựa hai màu.', 'Hai loại nhựa lần lượt được ép vào cùng một khuôn, ví dụ tay cầm dụng cụ điện.'] },
  cnc: { no: 9, title: '[DEMO] DEMO-CNC-01 機台與紀錄', machine: 'DEMO-CNC-01',
    zh: ['DEMO-CNC-01 位於加工展示區 A1。', '用途：比對外殼模型、工件樣本與文件。', '展示期間不驅動刀具。'],
    id: ['DEMO-CNC-01 berada di area pameran pemesinan A1.', 'Fungsi: membandingkan model casing, sampel benda kerja, dan dokumen.', 'Selama pameran, alat potong tidak dijalankan.'],
    vi: ['DEMO-CNC-01 đặt tại khu trưng bày gia công A1.', 'Công dụng: đối chiếu mô hình vỏ, mẫu phôi và tài liệu.', 'Trong thời gian trưng bày, dao cắt không vận hành.'] },
  cmm: { no: 5, title: '[DEMO] 三次元量測展示台 / Coordinate measurement exhibit - 機台資料', machine: 'DEMO-CMM-03',
    zh: ['DEMO-CMM-03：三次元量測展示台。', '量測零件尺寸，結果寫入品檢紀錄。'],
    id: ['DEMO-CMM-03: meja ukur tiga dimensi.', 'Mengukur dimensi komponen, hasilnya dicatat di catatan inspeksi.'],
    vi: ['DEMO-CMM-03: bàn đo tọa độ ba chiều.', 'Đo kích thước chi tiết, kết quả ghi vào hồ sơ kiểm tra.'] },
  qr: { no: 1, title: '[DEMO] 瑕疵回報流程 / Quality report', machine: '—',
    zh: ['發現瑕疵時，回報表需填寫：設備代號、發現時間、問題描述、照片、聯絡人。', '回報編號格式為 DEMO-QA-日期-流水號。', '品質小組會在 1 個工作天內回覆追蹤編號。'],
    id: ['Saat menemukan cacat, isi: kode alat, waktu ditemukan, deskripsi masalah, foto, kontak.', 'Format nomor laporan: DEMO-QA-tanggal-nomor urut.', 'Tim mutu membalas nomor pelacakan dalam 1 hari kerja.'],
    vi: ['Khi phát hiện lỗi, điền: mã thiết bị, thời gian phát hiện, mô tả lỗi, ảnh, người liên hệ.', 'Định dạng mã báo cáo: DEMO-QA-ngày-số thứ tự.', 'Nhóm chất lượng phản hồi mã theo dõi trong 1 ngày làm việc.'] },
  track: { no: 8, title: '[DEMO] 回報狀態與追蹤 / Report tracking', machine: '—',
    zh: ['回報狀態分為：已收到、待補充、處理中、已結案。', '狀態為「待補充」時，品質小組會說明缺少哪些欄位。'],
    id: ['Status laporan: Diterima, Perlu dilengkapi, Diproses, Selesai.', 'Jika "Perlu dilengkapi", tim mutu menjelaskan kolom yang kurang.'],
    vi: ['Trạng thái: Đã nhận, Cần bổ sung, Đang xử lý, Đã đóng.', 'Khi "Cần bổ sung", nhóm chất lượng sẽ nói rõ còn thiếu mục nào.'] },
  log: { no: 6, title: '[DEMO] 品檢紀錄 / Inspection log', machine: 'DEMO-CMM-03',
    zh: ['品檢紀錄欄位：設備代號、量測日期、量測項目、結果、檢驗人。'],
    id: ['Kolom catatan inspeksi: kode alat, tanggal ukur, item ukur, hasil, pemeriksa.'],
    vi: ['Các cột hồ sơ kiểm tra: mã thiết bị, ngày đo, hạng mục đo, kết quả, người kiểm tra.'] },
  hand: { no: 2, title: '[DEMO] 換班交接清單 / Shift handover', machine: '—',
    zh: ['交接表需包含：當班進度、未完成事項、異常追蹤編號、待確認文件、下一班負責人。', '口頭交代後，兩班仍須一起確認表單內容。'],
    id: ['Formulir serah terima: progres shift, pekerjaan belum selesai, nomor pelacakan masalah, dokumen yang perlu dikonfirmasi, penanggung jawab shift berikutnya.', 'Setelah penjelasan lisan, kedua shift tetap mengecek formulir bersama.'],
    vi: ['Phiếu bàn giao gồm: tiến độ ca, việc chưa xong, mã theo dõi sự cố, tài liệu cần xác nhận, người phụ trách ca sau.', 'Sau khi dặn dò bằng lời, hai ca vẫn phải cùng kiểm tra phiếu.'] },
  servo: { no: 12, title: '[師傅補登] JM150-DC 伺服過載警報處理經驗', machine: 'JM150-DC', fresh: true,
    zh: ['上傳：王師傅（資深技術員）・審核：品質主管', '警報多半是射出時負載過大。', '處理：按停止 → 檢查模具卡料與頂針 → 確認射出速度與壓力 → 通知班長後重新啟動。', '不要自行拆卸伺服馬達。'],
    id: ['Diunggah: Pak Wang (teknisi senior)・Ditinjau: kepala mutu', 'Alarm biasanya muncul karena beban injeksi terlalu besar.', 'Penanganan: stop → cek plastik tersangkut & pin ejektor → cek kecepatan dan tekanan injeksi → lapor kepala regu, lalu nyalakan ulang.', 'Jangan membongkar motor servo sendiri.'],
    vi: ['Người tải lên: chú Vương (kỹ thuật viên lâu năm)・Duyệt: trưởng chất lượng', 'Cảnh báo thường do tải khi ép quá lớn.', 'Xử lý: dừng máy → kiểm tra kẹt nhựa và chốt đẩy → kiểm tra tốc độ, áp suất ép → báo tổ trưởng rồi khởi động lại.', 'Không tự tháo động cơ servo.'] }
};

/* =========================================================
   Budi 今天的問題與回答（示範資料）
   ========================================================= */
var QA = {
  machines: {
    q: { zh: '請介紹目前現有的機台', id: 'Tolong perkenalkan mesin-mesin yang ada saat ini.', vi: 'Hãy giới thiệu các máy hiện có.' },
    checked: 6, src: ['mk6', 'dc', 'cnc', 'cmm'],
    a: {
      zh: { lead: '知識庫目前收錄 4 台展示機台：', list: [['JM150-MK6｜單色射出成型機：一次射出一種塑料，生產單色零件。', 1], ['JM150-DC｜雙色射出成型機：兩種塑料射進同一副模具，可做出軟硬雙色的電動工具手柄。', 2], ['DEMO-CNC-01｜CNC 加工展示機：在加工展示區 A1，用來比對外殼模型與工件樣本。', 3], ['DEMO-CMM-03｜三次元量測展示台：量測零件尺寸，留下品檢紀錄。', 4]], note: '兩台射出成型機的型號只差最後幾碼，請以機台銘牌上的型號為準。' },
      id: { lead: 'Saat ini ada 4 mesin pameran di basis pengetahuan:', list: [['JM150-MK6 | Mesin cetak injeksi satu warna: menyuntikkan satu jenis plastik untuk komponen satu warna.', 1], ['JM150-DC | Mesin cetak injeksi dua warna: dua jenis plastik masuk ke cetakan yang sama, misalnya gagang perkakas listrik keras-lunak.', 2], ['DEMO-CNC-01 | Mesin CNC pameran: di area pemesinan A1, untuk membandingkan model casing dan sampel benda kerja.', 3], ['DEMO-CMM-03 | Meja ukur tiga dimensi: mengukur dimensi komponen dan menyimpan catatan inspeksi.', 4]], note: 'Nomor model kedua mesin cetak hanya beda beberapa huruf terakhir. Cocokkan dengan pelat nama di mesin.' },
      vi: { lead: 'Hiện kho tri thức có 4 máy trưng bày:', list: [['JM150-MK6 | Máy ép nhựa một màu: ép một loại nhựa để làm chi tiết một màu.', 1], ['JM150-DC | Máy ép nhựa hai màu: ép hai loại nhựa vào cùng một khuôn, ví dụ tay cầm dụng cụ điện có phần cứng và mềm.', 2], ['DEMO-CNC-01 | Máy CNC trưng bày: ở khu gia công A1, dùng để đối chiếu mô hình vỏ với mẫu phôi.', 3], ['DEMO-CMM-03 | Bàn đo tọa độ ba chiều: đo kích thước chi tiết và lưu hồ sơ kiểm tra.', 4]], note: 'Mã hai máy ép chỉ khác vài ký tự cuối. Hãy đối chiếu với bảng tên trên máy.' }
    }
  },
  cnc: {
    q: { zh: 'DEMO-CNC-01 放在哪裡？用途是什麼？', id: 'Di mana letak DEMO-CNC-01 dan apa fungsinya?', vi: 'DEMO-CNC-01 đặt ở đâu và dùng để làm gì?' },
    checked: 3, src: ['cnc'],
    a: {
      zh: { list: [['位置：加工展示區 A1', 1], ['用途：比對外殼模型、工件樣本與文件', 1], ['注意：展示時不驅動刀具', 1]] },
      id: { list: [['Lokasi: area pameran pemesinan A1', 1], ['Fungsi: membandingkan model casing, sampel benda kerja, dan dokumen', 1], ['Catatan: alat potong tidak dijalankan selama pameran', 1]] },
      vi: { list: [['Vị trí: khu trưng bày gia công A1', 1], ['Công dụng: đối chiếu mô hình vỏ, mẫu phôi và tài liệu', 1], ['Lưu ý: dao cắt không vận hành khi trưng bày', 1]] }
    }
  },
  defect: {
    q: { zh: '發現瑕疵時，回報需要哪些資料？', id: 'Kalau menemukan cacat produk, data apa saja yang harus dilaporkan?', vi: 'Khi phát hiện lỗi sản phẩm, cần báo cáo những thông tin gì?' },
    checked: 4, src: ['qr', 'track', 'cmm', 'log'],
    a: {
      zh: { secs: [['重點概覽', [['必填：設備代號、發現時間、問題描述、照片、聯絡人', 1], ['回報編號格式：DEMO-QA-日期-流水號', 1], ['品質小組會在 1 個工作天內回覆追蹤編號', 1]]],
                   ['怎麼填', [['設備代號：機台上的編號，例如 DEMO-CMM-03', 3], ['發現時間：寫到日期和時間', 0], ['問題描述：瑕疵類型和位置，例如「邊緣刮痕」', 0], ['照片：拍清楚瑕疵；還沒有照片就先標「待補充」', 0], ['聯絡人：姓名和聯絡方式', 0]]],
                   ['追蹤狀態', [['已收到 → 處理中 → 已結案；資料不足時會標成「待補充」', 2]]]] },
      id: { secs: [['Ringkasan', [['Wajib: kode alat, waktu ditemukan, deskripsi masalah, foto, kontak', 1], ['Format nomor laporan: DEMO-QA-tanggal-nomor urut', 1], ['Tim mutu membalas nomor pelacakan dalam 1 hari kerja', 1]]],
                   ['Cara mengisi', [['Kode alat: nomor di mesin, misalnya DEMO-CMM-03', 3], ['Waktu ditemukan: tulis tanggal dan jam', 0], ['Deskripsi: jenis dan letak cacat, misalnya "goresan di tepi"', 0], ['Foto: foto cacat dengan jelas; jika belum ada, tulis "menyusul"', 0], ['Kontak: nama dan cara menghubungi', 0]]],
                   ['Status pelacakan', [['Diterima → Diproses → Selesai; jika data kurang, statusnya "Perlu dilengkapi"', 2]]]] },
      vi: { secs: [['Tóm tắt', [['Bắt buộc: mã thiết bị, thời gian phát hiện, mô tả lỗi, ảnh, người liên hệ', 1], ['Định dạng mã báo cáo: DEMO-QA-ngày-số thứ tự', 1], ['Nhóm chất lượng phản hồi mã theo dõi trong 1 ngày làm việc', 1]]],
                   ['Cách điền', [['Mã thiết bị: mã ghi trên máy, ví dụ DEMO-CMM-03', 3], ['Thời gian phát hiện: ghi rõ ngày và giờ', 0], ['Mô tả: loại lỗi và vị trí, ví dụ "trầy ở mép"', 0], ['Ảnh: chụp rõ chỗ lỗi; nếu chưa có thì ghi "bổ sung sau"', 0], ['Người liên hệ: họ tên và cách liên lạc', 0]]],
                   ['Trạng thái theo dõi', [['Đã nhận → Đang xử lý → Đã đóng; nếu thiếu thông tin sẽ ghi "Cần bổ sung"', 2]]]] }
    }
  },
  handover: {
    q: { zh: '換班時應交接哪些內容？', id: 'Apa saja yang harus diserahterimakan saat ganti shift?', vi: 'Khi giao ca cần bàn giao những nội dung gì?' },
    checked: 3, src: ['hand'],
    a: {
      zh: { lead: '交班前，請把這 5 項寫進交接表：', list: [['當班進度', 1], ['未完成事項', 1], ['異常追蹤編號', 1], ['待確認文件', 1], ['下一班負責人', 1]], note: '口頭交代後，兩班仍要一起確認表單內容。' },
      id: { lead: 'Sebelum ganti shift, tulis 5 hal ini di formulir serah terima:', list: [['Progres shift ini', 1], ['Pekerjaan yang belum selesai', 1], ['Nomor pelacakan masalah', 1], ['Dokumen yang perlu dikonfirmasi', 1], ['Penanggung jawab shift berikutnya', 1]], note: 'Setelah penjelasan lisan, kedua shift tetap mengecek formulir bersama.' },
      vi: { lead: 'Trước khi giao ca, hãy ghi 5 mục này vào phiếu bàn giao:', list: [['Tiến độ ca làm', 1], ['Việc chưa hoàn thành', 1], ['Mã theo dõi sự cố', 1], ['Tài liệu cần xác nhận', 1], ['Người phụ trách ca sau', 1]], note: 'Sau khi dặn dò bằng lời, hai ca vẫn phải cùng kiểm tra phiếu.' }
    }
  },
  alarm: {
    q: { zh: '廠內是否有 JM150-DC 出現 Servo Overload Alarm 的相關紀錄？', id: 'Apakah ada catatan di pabrik tentang alarm Servo Overload pada JM150-DC?', vi: 'Nhà máy có hồ sơ nào về cảnh báo Servo Overload trên máy JM150-DC không?' },
    checked: 2, src: [], none: true,
    a: {
      zh: { none: '知識庫裡沒有 JM150-DC「Servo Overload Alarm」的處理紀錄。', lead: '我不會猜測處理方式。建議你：', list: [['記下機台型號、警報原文和發生情況', 0], ['請老師傅到現場確認', 0], ['確認後把經驗上傳成知識，下一位同事就查得到', 0]] },
      id: { none: 'Tidak ada catatan penanganan "Servo Overload Alarm" untuk JM150-DC di basis pengetahuan.', lead: 'Saya tidak akan menebak cara menanganinya. Saran:', list: [['Catat model mesin, teks alarm, dan kondisinya', 0], ['Minta teknisi senior memeriksa langsung', 0], ['Setelah itu, unggah pengalamannya agar rekan berikutnya bisa menemukannya', 0]] },
      vi: { none: 'Kho tri thức chưa có hồ sơ xử lý "Servo Overload Alarm" của JM150-DC.', lead: 'Tôi sẽ không đoán cách xử lý. Đề xuất:', list: [['Ghi lại mã máy, nội dung cảnh báo và tình huống', 0], ['Nhờ kỹ thuật viên lâu năm kiểm tra tại chỗ', 0], ['Sau đó tải kinh nghiệm lên để đồng nghiệp sau tra được', 0]] }
    }
  },
  alarm2: {
    q: null, checked: 3, src: ['servo'],
    a: {
      zh: { lead: '找到 1 筆老師傅補登、已審核的紀錄：', secs: [['處理步驟', [['先按停止，讓機台停下來', 1], ['檢查模具有沒有卡料、頂針有沒有卡住', 1], ['確認射出速度和壓力有沒有被調高', 1], ['排除後通知班長，再重新啟動', 1]]]], note: '不要自己拆伺服馬達，需要時請找設備課。' },
      id: { lead: 'Ditemukan 1 catatan dari teknisi senior yang sudah disetujui:', secs: [['Langkah penanganan', [['Tekan stop dan hentikan mesin', 1], ['Periksa plastik tersangkut di cetakan atau pin ejektor yang macet', 1], ['Pastikan kecepatan dan tekanan injeksi tidak dinaikkan', 1], ['Setelah beres, lapor ke kepala regu, lalu nyalakan ulang', 1]]]], note: 'Jangan membongkar motor servo sendiri. Jika perlu, hubungi bagian peralatan.' },
      vi: { lead: 'Tìm thấy 1 hồ sơ do kỹ thuật viên lâu năm bổ sung, đã được duyệt:', secs: [['Các bước xử lý', [['Nhấn dừng để máy ngừng', 1], ['Kiểm tra khuôn có kẹt nhựa, chốt đẩy có bị kẹt không', 1], ['Xác nhận tốc độ và áp suất ép không bị chỉnh cao', 1], ['Xử lý xong thì báo tổ trưởng rồi mới khởi động lại', 1]]]], note: 'Đừng tự tháo động cơ servo; khi cần hãy liên hệ bộ phận thiết bị.' }
    }
  }
};
QA.alarm2.q = QA.alarm.q;

// 建議問題（取自系統的「歡迎體驗智慧聊天」畫面）
var SUGG = ['machines', 'cnc', 'defect', 'handover', 'alarm'];

// 王師傅的口述（語音轉文字後的原文）
var MASTER_SAY = '這個警報多半是射出時負載太大。先按停止，看模具有沒有卡料、頂針有沒有卡住，再確認射出速度、壓力是不是被人調高。弄好先跟班長講，再重新開機。伺服馬達不要自己拆。';

/* =========================================================
   Budi 的一天：八個時段
   ========================================================= */
var STEPS = [
  { time: '08:00', title: '報到，登入系統', story: '走進塑膠射出成型廠的第一天，帶班同事給了 Budi 一組新進員工帳號。他想用自己熟悉的印尼文看系統。', todo: '在平板上選擇語言，按「登入」。', done: '登入成功。系統會用 Budi 選的語言顯示。' },
  { time: '08:15', title: '看不懂的手冊', story: '桌上的中文手冊翻到機台型號那頁。JM150-MK6 和 JM150-DC 只差幾個字母，Budi 不知道眼前是哪一台。', todo: '看 Budi 翻手冊。準備好就按「下一步」，陪他去平板查。', done: 'Budi 決定用平板查查看。' },
  { time: '08:30', title: '第一次提問', story: 'Budi 想先知道廠裡有哪些機台、各自做什麼。', todo: '在平板上按「送出」。看 AI 先搜尋知識庫，再附上來源回答。', done: 'Budi 弄懂了兩台射出機的差別。' },
  { time: '09:10', title: '找到機台', story: '同事遞來一張便條，上面只寫了「DEMO-CNC-01」。Budi 想知道要往哪裡走、到了要看什麼。', todo: '送出問題，再點回答下方的來源，打開原始文件核對。', done: 'Budi 知道要去加工展示區 A1。' },
  { time: '13:40', title: '回報樣品瑕疵', story: 'Budi 把樣品轉到光線下，發現邊緣有一道刮痕。只寫「有刮痕」，品檢同事可能還得走回現場找。', todo: '送出問題，看回報要寫齊哪些資料。也可以點工作桌上的樣品。', done: 'Budi 把五項資料都寫進回報表。' },
  { time: '16:50', title: '和下一班交接', story: '接班同事來了。回報已經送出，還有一份文件待確認，Budi 想把該交代的事寫齊。', todo: '送出問題，拿到交接清單。', done: '交接清單寫好了。' },
  { time: '17:20', title: '查不到的警報', story: '巡線時，JM150-DC 的螢幕跳出「Servo Overload Alarm」。Budi 抄下機型和警報原文，想找找廠裡有沒有人遇過。', todo: '送出問題。知識庫裡沒有資料時，AI 會直說查不到，不會亂猜。', done: 'AI 回答查不到，Budi 去找老師傅。' },
  { time: '17:40', title: '老師傅補上紀錄', story: '王師傅到現場處理完，用語音把經驗錄下來。系統把語音轉成文字，送品質主管審核。核准後，Budi 再查一次。', todo: '在平板上按「送出審核」，核准後換回 Budi 的帳號再查一次。', done: '同一個問題，現在查得到了。' }
];
