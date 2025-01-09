class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillRect(0, 0, this.width, this.height);
    }
}

// Tạo đối tượng hình chữ nhật
const rectangle = new Rectangle(100, 50);

// Lấy canvas
const canvas = document.getElementById('myCanvas');

// Vẽ hình chữ nhật
rectangle.draw(canvas);

// Thay đổi kích thước
rectangle.width = 150;
rectangle.height = 80;

// Vẽ lại
rectangle.draw(canvas);

// Tính toán và hiển thị diện tích, chu vi
console.log('Diện tích:', rectangle.getArea());
console.log('Chu vi:', rectangle.getPerimeter());