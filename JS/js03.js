function solveQuadratic() {
    // Lấy giá trị từ các input
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Tính delta
    const delta = b * b - 4 * a * c;

    let result;
    if (delta < 0) {
        result = 'Phương trình vô nghiệm';
    } else if (delta === 0) {
        const x = -b / (2 * a);
        result = `Phương trình có nghiệm kép: \nx = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        result = `Phương trình có hai nghiệm phân biệt:\n x1 = ${x1},\n x2 = ${x2}`;
    }

    // Hiển thị kết quả
    document.getElementById('result').innerText = result;
}