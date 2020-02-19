import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PDFButton = props => {
  const { id, getCloseStatus } = props;
  const pxToMm = px => {
    return Math.floor(px / document.getElementById(id).offsetHeight);
  };

  const sendCloseStatus = () =>{
    getCloseStatus(true)
  }
  const handleClick = () => {
    sendCloseStatus();
    const input = document.getElementById(id);
    const inputHeightMm = pxToMm(input.offsetHeight);
    const a4WidthMm = 10;
    const a4HeightMm = 10;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      let pdf;
      // Document of a4WidthMm wide and inputHeightMm high
      if (inputHeightMm > a4HeightMm) {
        // elongated a4 (system print dialog will handle page breaks)
        pdf = new jsPDF("p", "mm", [inputHeightMm + 16, a4WidthMm]);
      } else {
        // standard a4
        pdf = new jsPDF();
      }

      pdf.addImage(imgData, "PNG", 30, 10);
      // pdf.save(`${id}.pdf`);
      pdf.output('dataurlnewwindow')
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
