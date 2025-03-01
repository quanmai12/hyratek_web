const Services = () => {
    return (
        <section className="py-16 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">Dịch Vụ Của Chúng Tôi</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Tư Vấn CNTT</h3>
                    <p>Chúng tôi cung cấp giải pháp công nghệ phù hợp với nhu cầu doanh nghiệp.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Phát Triển Phần Mềm</h3>
                    <p>Phát triển ứng dụng web và di động với công nghệ hiện đại.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Giải Pháp Cloud</h3>
                    <p>Tối ưu hóa hệ thống với nền tảng đám mây.</p>
                </div>
            </div>
        </section>
    );
};
export default Services;