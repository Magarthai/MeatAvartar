import React from 'react';
import '../CSS/IntroProduct.css';

function IntroProduct() {
  return (
    <div className="intro-product">
      <div className="intro">
        <div className="headerintro">เราสร้างผลิตภัณฑ์จากพืชทั้งหมดของเราให้เป็นธรรมชาติที่สุดเท่าที่จะเป็นไปได้ ดังนั้นผลิตภัณฑ์ของเราจึงคงความเป็นธรรมชาติมากที่สุด อุดมไปด้วยคุณค่าทางโภชนาการ และปลอดภัยสำหรับผู้บริโภค</div>
        <div className="listintro">
            <ul>
            <li>กระบวนการน้อยลง</li>
            <li>โซเดียมน้อยลง</li>
            <li>คาร์โบไฮเดรตน้อยลง</li>
            <li>ข้อมูลเพิ่มเติมเกี่ยวกับโปรตีน</li>
        </ul>
        </div>
        <button className='Productbtn'>Product</button>
      </div>
    </div>
  );
}

export default IntroProduct;
