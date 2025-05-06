# B1
# BigInt
- Tổng quan:
Trong js kiểu int  sử dụng định dạng 64-bit để lưu trữ số, do đó giới hạn lớn nhất của Number là 2^53 - 1 (~ 9,007,199,254,740,991). Nếu vượt qua giới hạn này, sẽ có thể gặp phải lỗi loss of precision (mất độ chính xác). 
vậy nên BigInt được sinh ra để làm việc với các số nguyên rất lớn (lớn hơn giới hạn của Number), và không bị mất độ chính xác khi tính toán với các số lớn.
BigInt có thể đại diện cho các số nguyên vượt quá 2^53 - 1 hoặc nhỏ hơn -2^53 + 1.
- Cách khởi tạo:
Dùng hàm BigInt() hoặc thêm n vào chuỗi số.
Vd: const previouslyMaxSafeInteger = 9007199254740991n;
    const alsoHuge = BigInt(9007199254740991);
- Toán tử:
Kiểu BigInt có thể dùng cách toán tử (+,-,*,/) hoặc các phép khác như (++, --, >>, <<, ...) với điều kiện cả hai bên tham gia phép toán đều là kiểu BigInt
- Chuyển sang int:
Big int có thể chuyển sang kiểu Int nếu như không mạng giá trị vượt quá giới hạn của int (2^53 -1)
- so sánh:
Kiểu big int có thể so sánh == với kiểu int nhưng không thể so sánh cùng kiểu giữ liệu(===)
vd: 0n === 0; // false
    0n == 0; // true
    1n < 2; // true
    2n > 1; // true
Ngoài ra kiểu BigInt còn có thể trộn lẫn vào array và sắp xếp bằng sort():
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // default sorting behavior
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]
- kiểu BigInt không hỗ trợ các hàm math.

# IEEE 754
- Tổng Quan:
IEEE 754 là một tiêu chuẩn quốc tế được sử dụng để biểu diễn số thực (floating-point numbers) trong các máy tính và hệ thống điện tử được thiết lập vào năm 1985 bởi viện  Institute of Electrical and Electronics Engineers (IEEE). Tiêu chuẩn này định nghĩa cách lưu trữ và xử lý các số thực (bao gồm số thập phân và số có dấu) để đảm bảo tính chính xác và khả năng tương thích giữa các hệ thống máy tính khác nhau
- Tiêu chuẩn IEEE 754:
+ Các định dạng số học: Các tập hợp dữ liệu số thực nhị phân và thập phân, bao gồm các số hữu hạn (bao gồm cả số 0 có dấu và số nhỏ hơn chuẩn), vô cùng, và các giá trị đặc biệt "không phải số" (NaNs).
+ Các định dạng trao đổi: Các mã hóa (chuỗi bit) có thể được sử dụng để trao đổi dữ liệu số thực một cách hiệu quả và gọn gàng.
+ Quy tắc làm tròn: Các thuộc tính cần được thỏa mãn khi làm tròn các số trong các phép toán số học và chuyển đổi.
+ Các phép toán: Các phép toán số học và các phép toán khác (như các hàm lượng giác) trên các định dạng số học.
+ Xử lý ngoại lệ: Các chỉ báo cho các điều kiện ngoại lệ (như chia cho 0, tràn số, v.v.).

# Destructuring Object trong Object
- Destructuring là gì:
Destructuring (hay destructuring assignment) là một tính năng trong JavaScript cho phép giải nén (extract) các giá trị từ một đối tượng (object) hoặc mảng (array) thành các biến riêng biệt. Tính năng này giúp mã dễ đọc và dễ hiểu hơn, giúp làm việc với các đối tượng và mảng một cách ngắn gọn.
- Destructuring Object trong Object:
Khi có một object trong object (hay nested object), bạn có thể thực hiện destructuring theo cách giống như bình thường, nhưng phải sử dụng cú pháp "destructuring lồng nhau" để lấy các giá trị từ object bên trong.
vd:const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};
const { name, age, address: { city, zip } } = person;
=> object lồng Object vẫn sẽ lấy được tham chiếu gốc khi destructure
