document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('videoModal');
  const modalBody = document.getElementById('modalBody');

  // Instagram Reelの埋め込みURL
  const reelEmbedUrl = 'https://www.instagram.com/reel/DX4P5zJsEfX/embed';

  // モーダルを開く処理
  openModalBtn.addEventListener('click', () => {
    // iframeを動的に挿入
    modalBody.innerHTML = `
      <iframe 
        src="${reelEmbedUrl}" 
        width="400" 
        height="480" 
        frameborder="0" 
        scrolling="no" 
        allowtransparency="true">
      </iframe>
    `;
    modal.style.display = 'flex';
  });

  // モーダルを閉じる処理
  const closeModal = () => {
    modal.style.display = 'none';
    modalBody.innerHTML = ''; // 動画の再生を止めるためiframeを破棄
  };

  closeModalBtn.addEventListener('click', closeModal);

  // 背景の黒い部分をクリックした時も閉じる
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
