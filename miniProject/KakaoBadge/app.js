'use strict'

// 버튼 클릭 시, 카톡 알림 숫자 증가
const btn = document.querySelector('.sendBtn');
    btn.disabled = true;
    btn.addEventListener('click', addCount);
const input = document.querySelector('.input');
const count = document.querySelector('.count');
const messages = document.querySelector('.messages');

input.addEventListener('input', function() {
    updateButtonState(); // 입력값 변경 시 버튼 상태 업데이트
});

function updateButtonState() {
    if (input.value.trim() !== '') {
        btn.disabled = false; // 텍스트가 입력되면 버튼 활성화
    } else {
        btn.disabled = true; // 텍스트가 없으면 버튼 비활성화
    }
}

btn.addEventListener('click', function() {
    sendMessage(); // 전송 버튼 클릭 시 메시지 전송
    input.value = ''; // 메시지 전송 후 입력창 초기화
    updateButtonState(); // 입력창 초기화 후 버튼 상태 업데이트
});


function addCount() {
    let add = Number(count.getAttribute('numCount')) + 1;
    count.setAttribute('numCount', add);
    if (add >= 1 && add <= 99) {
        count.classList.add('addNum');
    } else if (add > 99) {
        count.classList.add('numOver');
    }
    console.log(add);
}

function substractCount() {
    let substract = Number(count.getAttribute('numCount') - 1);
    count.setAttribute('numCount', substract);
    if (substract > 99) {
        count.classList.add('numCount');
    } else if (substract < 1) {
        count.classList.remove('addNum');
    } else if (substract < 100) {
        count.classList.remove('numOver');
    }
    console.log(substract);
}

btn.addEventListener('click', sendMessage);

function sendMessage() {
    const text = input.value.trim(); // 입력된 텍스트 가져오기 (공백 제거)
    
    if (text !== '') {
        const messageDiv = document.createElement('div'); // 새로운 메시지를 담을 div 요소 생성
        messageDiv.textContent = text; // 입력된 텍스트를 div에 추가
        
        const readBtn = document.createElement('button'); // '읽음' 버튼 생성
        readBtn.textContent = '읽음'; // 버튼 텍스트 설정
        readBtn.classList.add('readBtn'); // 클래스 추가
        readBtn.setAttribute('type', 'button'); // 버튼 타입 설정
        
        readBtn.addEventListener('click', function() {
            messages.removeChild(messageDiv); // '읽음' 버튼을 클릭하면 해당 메시지 삭제
        });
        readBtn.addEventListener('click', substractCount)
        messageDiv.appendChild(readBtn); // 메시지 div 안에 '읽음' 버튼 추가
        messages.appendChild(messageDiv); // messages 컨테이너에 메시지 추가
        
        input.value = ''; // 입력 필드 초기화
    }
}