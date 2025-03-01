const News = () => {
    return (
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Tin Tức Mới Nhất</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Công Nghệ AI</h3>
            <p>Ứng dụng trí tuệ nhân tạo trong các lĩnh vực công nghệ.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
            <p>Giải pháp blockchain giúp tăng cường bảo mật và minh bạch.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Chuyển Đổi Số</h3>
            <p>Doanh nghiệp đang thay đổi mạnh mẽ với công nghệ số.</p>
          </div>
        </div>
      </section>
    );
  };
  export default News;