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
    input.style.visibility = 'visible';
    html2canvas(input, {scale: 3}).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF({compress: true});
      const imgWidth = pdf.internal.pageSize.getWidth() - 20; // margin left, right 10
      const imgHeight = imgWidth * canvas.height / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.setProperties({
        title: "Stock Lending History"
      });
      input.style.visibility = 'hidden';
      window.open(pdf.output('bloburl', 'test'), '_blank')
    });
    
  };
  return (
    <div className="p-modal_window_msg_close_account">
      <div id="myMm" style={{ height: "1mm" }} />
      <div className="u-mt20p">
        <a className="c-button c-button_small"  onClick={handleClick}>
          Print
        </a>
      </div>
    </div>
  );
};

export default PDFButton;
