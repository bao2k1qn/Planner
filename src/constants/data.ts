import { FireIcon, HeartIcon, PlusIcon, SparklesIcon, UsersIcon } from '@heroicons/react/16/solid';

export const CONTACT_TYPES = { LINK: 'LINK', TYPOGRAPHY: 'TYPOGRAPHY' };

export const siteConfig = {
    title: 'Rum Beauty & Spa',
    description: 'Đến và trải nghiệm các dịch vụ tại Rum Beauty & Spa',
    url: process.env.NEXT_PUBLIC_BASE_URL,
};

export const navs = [
    {
        href: '#features-section',
        name: 'Dịch vụ',
    },
    {
        href: '#cta-section',
        name: 'Giá trị',
    },
    {
        href: '#social-proof-section',
        name: 'Feedback',
    },
    {
        href: '#employees-section',
        name: 'Nhân viên',
    },
    {
        href: '#contacts-section',
        name: 'Liên hệ',
    },
];

export const features = [
    {
        title: 'Massage AROMA',
        description:
            'Massage kĩ thuật sử dụng tinh dầu, giúp làn da mềm mại, xoa bóp lả lướt mang lại sự khoan khoái, thư giãn nhất.',
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
        Icon: SparklesIcon,
    },
    {
        title: 'Massage Đá nóng',
        description:
            'Liệu pháp xoa bóp sử dụng đá nóng dọc cột sống và cơ bắp để xoa bóp giúp thư giãn, lưu thông mạch máu,giảm đau nhức, viêm cơ.',
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
        Icon: FireIcon,
    },
    {
        title: 'Massage Thái',
        description:
            'Chân ái cho khách hàng thích massage lực mạnh. Kết hợp kỹ thuật tác động lên đa bộ phận với tốc độ thực hiện nhanh cùng lực mạnh, giúp giải tỏa căng thẳng, xua tan mệt mỏi, hạn chế các bệnh về cơ, xương khớp.',
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
        Icon: PlusIcon,
    },
    {
        title: 'Massage bốn tay',
        description:
            'Sự phối hợp nhịp nhàng từ bốn bàn tay của hai Kĩ thuật viên cùng tác động lên body của một khách hàng mang lại sự thư giãn tột cùng, cải thiện thể trạng.',
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
        Icon: UsersIcon,
    },
    {
        title: 'Massage Mẹ bầu',
        description:
            'Mọi stress, lo âu, sự khó chịu về tinh thần cũng như thể chất trong thời gian thai kỳ sẽ được cải thiện ngay với bàn tay massage điêu luyện của kỹ thuật viên.',
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
        Icon: HeartIcon,
    },
];
export const CTAs = [
    {
        topic: '',
        title: 'MỌI CĂNG THẲNG, MỆT MỎI TAN BIẾN CHỈ SAU 60 PHÚT! BẠN TIN CHỨ?',
        description: 'Đơn giản chỉ cần bạn biết nâng niu chính mình. Hãy để Rum giúp bạn!',
        benefits: [
            'Lưu thông khí huyết',
            'Giải tỏa năng lượng tiêu cực',
            'Cải thiện tinh thần',
            'Hạn chế tình trạng nhức mỏi xương khớp',
        ],
        imagePath: '/images/benefit-image-1.png',
    },
    {
        topic: '',
        title: 'MASSAGE BODY - THAI KỲ HẠNH PHÚC CÙNG RUM BEAUTY & SPA',
        description: 'Lựa chọn hàng đầu của các bà mẹ!',
        benefits: [
            'Tăng tuần hoàn máu & đào thải độc tố',
            'Giải tỏa căng thẳng, thư giãn tinh thần, cân bằng nội tiết',
            'Hạn chế tình trạng táo bón thai kỳ',
            'Loại bỏ nguy cơ rạn da sau sinh',
            'Thảm thiểu tỷ lệ sinh non',
        ],
        imagePath: '/images/benefit-image-2.jpg',
    },
];

export const feedbacks = [
    {
        avatarUrl: '/images/default-user.png',
        name: 'Hoang Anh',
        feature: 'massage',
        message:
            'Dịch vụ massage tại spa này thật sự xuất sắc! Mỗi lần đến đây, tôi luôn cảm thấy thư giãn và sảng khoái. Nhân viên thân thiện và chuyên nghiệp, không gian thoải mái và sạch sẽ. Tôi đã thử nhiều spa khác nhau, nhưng spa này luôn là lựa chọn hàng đầu của tôi. Tôi rất hài lòng và chắc chắn sẽ quay lại!',
    },
    {
        avatarUrl: '/images/default-user.png',
        name: 'Lê Thành',
        feature: 'massage',
        message:
            'Dịch vụ massage ở đây thực sự tuyệt vời! Nhân viên thân thiện và chuyên nghiệp, không gian đẹp và sạch sẽ. Tôi luôn cảm thấy thư giãn và thoải mái mỗi khi đến đây. Sẽ quay lại và giới thiệu cho bạn bè!',
    },
    {
        avatarUrl: '/images/default-user.png',
        name: 'Minh Đức',
        feature: 'massage',
        message:
            'Spa này là điểm đến hoàn hảo cho một phiên massage thư giãn. Nhân viên thân thiện và tận tâm, không gian đẹp và yên bình. Tôi cảm thấy sảng khoái và sẽ quay lại!',
    },
];

export const employees = [
    {
        name: 'RUM 01',
        role: 'Nhân viên Rum',
        responsibility: 'Massage, trị mụn,...',
    },
    {
        name: 'RUM 02',
        role: 'Nhân viên Rum',
        responsibility: 'Massage, trị mụn,...',
    },
    {
        name: 'RUM 04',
        role: 'Nhân viên Rum',
        responsibility: 'Massage, trị mụn,...',
    },
    {
        name: 'RUM 07',
        role: 'Nhân viên Rum',
        responsibility: 'Massage, trị mụn,...',
    },
    {
        name: 'RUM 08',
        role: 'Nhân viên Rum',
        responsibility: 'Massage, trị mụn,...',
    },
];

export const contacts = [
    {
        title: 'Số điện thoại',
        values: ['0931335899'],
        type: CONTACT_TYPES.TYPOGRAPHY,
    },
    {
        title: 'Zalo',
        values: ['0931335899'],
        type: CONTACT_TYPES.LINK,
        href: process.env.NEXT_PUBLIC_ZALO_BOOKING_URL,
    },
    {
        title: 'Facebook',
        values: ['facebook.com/rumbeautyspa'],
        type: CONTACT_TYPES.LINK,
        href: 'https://www.facebook.com/rumbeautyspa',
    },
    {
        title: 'Địa chỉ',
        values: ['6A Bình Giã, Phường 13, Tân Bình, Thành phố Hồ Chí Minh 70000, Việt Nam'],
        type: CONTACT_TYPES.LINK,
        href: 'https://maps.app.goo.gl/vQaNYwzgfKf8bGRcA',
    },
];
