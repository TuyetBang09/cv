function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("selectedLanguage", lang);
    
    for (const key in translations[lang]) {
        let element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    }
}

const translations = {
    en: {
        "intro-title": "Introduce yourself",
        "intro-text": "Hello, I am a second-year student at Binh Duong University. The reason I chose IT is because I like it and its strong development for a bright future ahead.",
        "basic-info-title": "Basic Information",
        "age-label": "Age:",
        "email-label": "Email:",
        "phone-label": "Phone:",
        "address-label": "Address:",
        "skills-title": "Professional Skills",
        "portfolio-title": "Portfolio", 
        "work-title": "Work Experience", 
        "work-text": "💡 Technical Skills & Learning, Learn and practice with GitHub to manage source code. Learn about ReactJS, Bootstrap to build modern web interfaces. Actively participate in online courses and events about programming",
        "education-title": "Education",
        "education-text": "🎓 Students of Binh Duong University (2025 - present) Field of study: Information Technology/Computer Science Key Subjects: Web Programming, Databases, Object-Oriented Programming, Data Structures & Algorithms  Personal projects: Building personal portfolios, designing product introduction websites",
        "hobbies-title": "Hobbies",
        "hobbies-text": "Reading stories, listening to music, walking, and taking scenic photos.",
        "contact-title": "Contact Me"
    },
    vi: {
        "intro-title": "Giới thiệu bản thân",
        "intro-text": "Xin chào, tôi là sinh viên năm hai tại Đại học Bình Dương. Lý do tôi chọn CNTT là vì tôi yêu thích và nhận thấy sự phát triển mạnh mẽ của nó trong tương lai.",
        "basic-info-title": "Thông tin cơ bản",
        "age-label": "Tuổi:",
        "email-label": "Email:",
        "phone-label": "Số điện thoại:",
        "address-label": "Địa chỉ:",
        "skills-title": "Kỹ năng chuyên môn",
        "portfolio-title": "danh mục công việc",
        "work-title": "Kinh nghiệm làm việc",
        "work-text": "💡Kỹ năng kỹ thuật & Học tập  Tìm hiểu và thực hành với GitHub để quản lý mã nguồn. Tìm hiểu về ReactJS, Bootstrap để xây dựng giao diện web hiện đại.   Tích cực tham gia các khóa học và sự kiện trực tuyến về lập trình.",
        "education-title": "Trình độ học vấn",
        "education-text": "🎓 Sinh viên Trường Đại học Bình Dương (2025 - nay) Lĩnh vực nghiên cứu: Công nghệ thông tin / Khoa học máy tính Các chủ đề chính: Lập trình web, Cơ sở dữ liệu, Lập trình hướng đối tượng, Cấu trúc dữ liệu và thuật toán Dự án cá nhân: Xây dựng danh mục đầu tư cá nhân, thiết kế website giới thiệu sản phẩm",
        "hobbies-title": "Sở thích",
        "hobbies-text": "Đọc truyện, nghe nhạc, đi dạo và chụp ảnh phong cảnh.",
        "contact-title": "Liên hệ với tôi"
    }
};