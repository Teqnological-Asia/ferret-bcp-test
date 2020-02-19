import React from "react";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

const PDFButton = props => {
  const { id, getCloseStatus } = props;
  const sendCloseStatus = () =>{
    getCloseStatus(true)
  }
  const handleClick = () => {
    sendCloseStatus();
    const input = document.getElementById(id);
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      const pdf = new JsPDF();
      const imgWidth = pdf.internal.pageSize.getWidth() - 20; // margin left, right 10
      const imgHeight = imgWidth * canvas.height / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.setProperties({
        title: "Stock Lending History"
      });
      window.open(pdf.output('bloburl', 'test'), '_blank')
    });
  };
  return (
    <div className="p-modal_window_msg_close_account">
      <div id="myMm" style={{ height: "1mm" }} />
      <div className="u-mt20p">
        <a className="c-button"  onClick={handleClick}>
          Print
        </a>
      </div>
    </div>
  );
};

export default PDFButton;
