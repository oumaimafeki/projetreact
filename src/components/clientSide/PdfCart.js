import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useShoppingCart } from 'use-shopping-cart';

const PdfCart = () => {
  const { cartDetails, totalPrice } = useShoppingCart();

  const generatePDF = (tableRows, columns, isLandscape) => {
    const doc = new jsPDF({
      orientation: isLandscape ? 'landscape' : 'portrait',
    });

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    

    
    
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    const middleOfPage = doc.internal.pageSize.width / 2;
    doc.text('*** Luxury Fragrance ***', middleOfPage, 15, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    
    doc.setFontSize(14);
    doc.text(`Date: ${currentDate} - Time: ${currentTime}`, 14, 30);
    doc.autoTable({
      head: columns,
      body: tableRows,
      startY: 70,
      headStyles: {
        fillColor: [173, 120, 205],
        fontSize: 12,
        halign: 'center',
      },
      columnStyles: {
        0: { cellWidth: 30, cellHeight: 20, halign: 'center' },
        1: { cellWidth: 'auto', halign: 'center', fontStyle: 'bold' },
        2: { cellWidth: 30, halign: 'center' },
        3: { cellWidth: 30, halign: 'center' },
      },
      styles: {
        valign: 'middle',
      },
      didParseCell: function (data) {
        if (data.section === 'body') {
          data.row.height = 20;
        }
        if (data.column.dataKey === 'image') {
          data.cell.text = '';
          data.cell.raw = `${data.cell.raw}`;
        }
      },
      didDrawCell: function (data) {
        if (
          data.row.section === 'body' &&
          data.column.dataKey === 'image' &&
          data.cell.raw
        ) {
          doc.addImage(
            data.cell.raw,
            'PNG',
            data.cell.x + 5,
            data.cell.y + 2,
            13,
            16
          );
        }
      },
    });

    
    doc.setTextColor(139, 0, 0);
    doc.text(
      `Total : ${totalPrice.toFixed(3)} TND`,
      14,
      doc.autoTable.previous.finalY + 10
    );

    doc.setTextColor(147, 112, 219);
    
    doc.text('Merci De Votre Visite', 14, doc.autoTable.previous.finalY + 20);
  
    doc.text('A Bientôt !', 14, doc.autoTable.previous.finalY + 30);
    
    doc.setTextColor(0, 0, 0);

    
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0];
    doc.save(`report_${dateStr}.pdf`);
  };

  const columnsPDF = [
    {
      image: 'image',
      title: 'Désignation',
      quantity: 'Quantité',
      price: 'Prix',
    },
  ];

  return (
    <>
      <button
        style={{
          color: 'white',
          backgroundColor: 'darkviolet',
          height: 70,
          position: 'fixed',
          top: 150,
          left: 150,
          cursor: 'pointer',
        }}
        onClick={() =>
          generatePDF(
            Object.values(cartDetails).map((item) => ({
              image: item.image,
              title: item.title,
              quantity: item.quantity,
              price: item.price,
            })),
            columnsPDF,
            true
          )
        }
      >
        DOWNLOAD PDF
      </button>
    </>
  );
};

export default PdfCart;
