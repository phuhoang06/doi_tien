function convertCurrency() {
    // Lấy giá trị từ các trường nhập liệu
    let amount = parseInt(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;


    let exchangeRates = {
        'VND': 1,
        'USD': 23000,
    };

    // Tính số tiền sau khi chuyển đổi
    let result;
    if (fromCurrency === 'USD' && toCurrency === 'VND') {
        result = amount * exchangeRates['USD']; // USD sang VND
    } else if (fromCurrency === 'VND' && toCurrency === 'USD') {
        result = amount / exchangeRates['USD']; // VND sang USD
    } else {
        result = amount; // Chuyển đổi cùng loại tiền tệ
    }

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Kết quả: ${result.toFixed(2)} ${toCurrency}`;
}