import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface LayoutData {
  name: string,
  elem: HTMLElement
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {
  raw: string = `
  <style>* { font-size: 20px;} .app-post-header { font-family: Generic !important; font-size: 30px !important;}</style>
  <h2>1. Chân gà ngâm sả tắc</h2>
  <p>Nhắc đến món chân gà thì không thể quên món chân gà ngâm sả tắc. Đây có thể nói là món ăn giúp ‘đánh bóng tên tuổi” của món chân gà trong thời gian qua. Bởi hương thơm hấp dẫn của món ăn, sự hòa quyện tài tình của sả, tắc, nước mắm, lá chanh, vị chua chua ngọt ngọt, xen chút cay cay của ớt. Chân gà thấm đều gia vị, giòn sần sật, đã được rút xương vì thế ai ăn cũng thích mê.</p><p>Món chân gà ngâm sả tắc phù hợp cho các buổi hàn thuyên, trò chuyện vào cuối tuần, khi cả nhà quây quần bên nhau và cùng nhâm nhi món ăn hấp dẫn này. Hoặc bạn có thể làm để đãi bạn bè trong các buổi gặp mặt. Cách làm đơn giản, mang đến món ăn ngon, ngại gì không thử!&nbsp;</p>
  <h2>2. Chân gà chiên mắm</h2>
  <p>Món chân gà thơm ngon thứ 2 mà Barona muốn chia sẻ đến các bạn là món chân gà chiên mắm. Chân gà chiên giòn, thấm đều vị đậm đà, thơm lừng hương thơm của nước mắm, quyện cùng tỏi, ớt. Món ăn có màu vàng đậm, sánh quyện vừa đẹp mắt vừa thơm ngon.</p><p>Nếu bạn muốn đổi món cho gia đình thêm phần đa dạng thì hãy xem ngay cách làm món chân gà chiên mắm này nhé!</p><p>Chân gà sau khi được sơ chế, bạn áo chân gà cùng với bột năng, sau đó đem chiên giòn, rồi vớt ra để ráo. Tiếp theo pha hỗn hợp nước mắm tỏi, ớt, đường, đến khi vừa với khẩu vị gia đình. Sau đó, bắc chảo lên bếp và cho chân gà vô trở lại, rưới đều hỗn hợp nước mắm đã pha lên trên, đảo đều tay đến khi nước mắm quyện lại, thấm đều vào chân gà thì tắt bếp.&nbsp;</p>
  <h2>3. Chân gà sốt cay</h2>
  <p>Bạn là một tín đồ mê ăn cay thì không thể bỏ qua món chân gà sốt cay hấp dẫn này. Đĩa chân gà sốt cay có màu đỏ đẹp mắt, chân gà thì mềm mềm sần sật, phủ bên ngoài là lớp nước sốt sền sệt. Khi ăn bạn sẽ thích mê bởi vị cay cay đậm đà của tương ớt pha chút vị chua chua của tương cà. Đây hứa hẹn sẽ là món ăn đưa cơm trong các ăn hàng ngày của gia đình đấy nhé!</p>
  <h2>4. Chân gà rang muối</h2>
  <p>Chân gà rang muối có màu vàng đẹp mắt. Món này các chị làm cho anh xã lai rai vào cuối tuần là hết sẩy. Chân gà chiên giòn rụm, bên ngoài tẩm quanh lớp muối rang mằn mặn, bên trong là lớp thịt gà giòn mềm, thơm lừng mùi sả hấp dẫn. Chấm chân gà rang muối cùng với nước sốt tiêu chanh hoặc nước chấm chua ngọt cho vị ngon đúng điệu. Bạn cùng Barona vào bếp trổ tài ngay thôi!</p>
  <h2>5. Chân gà hầm đậu đen</h2>
  <p>Chân gà và đậu đen được biết đến là 2 loại thực phẩm giàu chất dinh dưỡng, khi kết hợp với nhau sẽ tạo nên món ăn thơm ngon và bổ dưỡng cho cơ thể. Vì thế, trong Đông Y, món chân gà hầm đậu đen được xem là món ăn bài thuốc với nhiều công dụng như: bổ thận, giảm đau nhức xương khớp, giúp bạn có giấc ngủ sâu và ngon hơn.</p>
  <p>Chân gà hầm đậu đen với cách chế biến đơn giản, nhưng lại vô cùng thơm ngon và bổ dưỡng. Chân gà hầm mềm thấm đậm vị, đậu đen thơm, bùi bùi, nước hầm xương ngọt thanh. Bạn đang bị mất ngủ hãy nấu ngay món chân gà hầm đậu đen, và dùng vào bữa cơm chiều cùng với một ít cơm trắng, như vậy sẽ giúp bạn có giấc ngủ ngon hơn.</p>
  <h2>6. Chân gà luộc</h2>
  <p>Một cách chế biến chân gà vừa ngon vừa đơn giản khác đó chính là món chân gà luộc. Sau khi sơ chế chân gà, bạn chỉ cần đem chân gà đi luộc, cho vào nồi luộc một ít lát gừng để chân gà thơm hơn. Sau khi chân gà đã chín mềm thì vớt chân gà ra đĩa, rắt lên trên một ít lá chanh cắt nhuyễn. Như vậy là bạn đã có món chân gà luộc vô cùng hấp dẫn và thơm ngon rồi nhé.</p><h2>7. Chân gà xào sả ớt</h2><p>Chân gà xào sả ớt cũng là một món đáng để bạn nấu để gia đình thưởng thức trong bữa cơm hàng ngày. Đây là món ăn vô cùng đưa cơm, bởi vị cay cay của ớt, quyện cùng hương thơm của sả, quấn quanh chân gà giòn dai, sần sật. Món chân gà xào sả ớt ăn cùng với cơm nóng, thêm ít dưa leo và cà chua thì tuyệt cú mèo, bạn cùng Barona vào bếp làm ngay nhé!</p>
  <h2>8. Chân gà nướng sả</h2>
  <p>Chân gà nướng sả lại là một món ăn hấp dẫn khác từ chân gà. Chân gà nướng với sả thơm lừng, chân gà giòn, dai thấm đậm vị, quyện cùng hương thơm ngây ngất của sả, chắc chắn cả nhà sẽ thích mê. Chỉ với vài bước chuẩn bị đơn giản bạn có ngay món chân gà nướng sả vô cùng hấp dẫn.&nbsp;</p><p>Sau khi sơ chế chân gà, tiếp đến hấp chân gà cùng với một ít lát gừng tươi. Sau đó vớt chân gà ra thau và cho vào thau một gói Xốt Gia Vị Hoàn Chỉnh Barona - Thịt Nướng Sả, thêm một ít tỏi băm nhuyễn, ướp trong khoảng 2 tiếng, tiếp theo đem đi nướng trên bếp khoảng 20 phút. Thế là bạn đã có món chân gà nướng sả ngon đúng điệu, cùng thử nhé!</p>
  <h2>9. Chân gà tàu xì</h2>
  <p>Chân gà tàu xì có thể là món ăn mới lạ đối với bạn. Tuy vậy, đây là món ăn vô cùng thơm ngon, hấp dẫn. Chân gà giòn ngon, sựt sựt thấm đều gia vị hòa cùng nước sốt đậm đà. Nước sốt thơm ngon là bởi sự kết hợp hài hòa của nhiều loại gia vị như: tương đậu đen, dầu hào, bột ngũ vị hương, dầu vừng và hoa hồi. Tất cả hòa quyện vào nhau cho ra món ăn tròn vị, đúng điệu.</p>
  <h2>10. Chân gà hầm đậu phộng</h2>
  <p>Bên cạnh món chân gà hầm đậu đen, chúng ta còn có món chân gà hầm đậu phộng cũng vô cùng thơm ngon và bổ dưỡng. Theo các chuyên gia về sức khỏe, người bị bệnh về đau nhức xương khớp nên bổ sung món chân gà hầm đậu phộng này vào trong thực đơn dinh dưỡng của mình. Chân gà được hầm mềm, đậu phộng bùi bùi, hòa cùng nước súp canh nóng hổi, thơm ngon. Bạn hãy bỏ túi cách nấu món ăn bổ dưỡng này cho gia đình mình nhé!</p>
  `
  content: string = '';
  layout: LayoutData[] = [];
  @ViewChild('contentDiv') contentRef: any;
  constructor(public sanitizer: DomSanitizer, private cd: ChangeDetectorRef) {
    var html = document.createElement( 'section' );
    html.innerHTML = this.raw;
    let index = 0;
    html.querySelectorAll("h2").forEach(elem => {
      if (elem.textContent) {
        elem.id = "app-post-layout-id-"+index;
        elem.classList.add("app-post-header")
        index++;
        this.layout.push({
          elem: elem,
          name: elem.textContent
        })
      }
    });
    console.log(html);
    this.content = html.innerHTML;
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // let index = 0;
    // let html = this.contentRef.nativeElement as HTMLElement;
    // html.querySelectorAll("h2").forEach(elem => {
    //   if (elem.textContent) {
    //     elem.id = "layout"+index;
    //     index++;
    //     this.layout.push({
    //       elem: elem,
    //       name: elem.textContent
    //     })
    //     console.log(elem);
    //   }
    // });
    // this.cd.detectChanges();
  }
  scrollTo(index: number) {
    document.getElementById("app-post-layout-id-"+index)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
