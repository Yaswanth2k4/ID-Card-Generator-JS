const header=document.createElement('header');
header.innerText="ID Card Generator";
document.body.appendChild(header);

const bodyCont=document.createElement('div');
bodyCont.className='bodyCont';
document.body.appendChild(bodyCont);

const formCont=document.createElement('div');
formCont.className='formCont';
bodyCont.appendChild(formCont);

const cardCont=document.createElement('div');
cardCont.className='cardCont';
bodyCont.appendChild(cardCont);

const heading=document.createElement('p');
heading.innerText='Enter Student Details';
heading.className='heading';
formCont.appendChild(heading);

const form=document.createElement('form');
form.name='Detailsform';
formCont.appendChild(form);

const formInputs=[
    {
        label:"Enter Name :",
        fname:"name"
    },
    {
        label:"Enter College Name :",
        fname:"college"
    },
    {
        label:"Enter Location :",
        fname:'location'
    }
];

for(let formInput of formInputs){
    const label=document.createElement('p');
    label.className='label';
    label.innerText=formInput.label;
    const br=document.createElement('br');
    const input=document.createElement('input');
    input.name=formInput.fname;
    input.className='input';
    form.append(label,br,input,br);
}

const label=document.createElement('p');
label.innerText="Upload student's picture :";
label.className='label';
const br=document.createElement('br');
const input=document.createElement('input');
input.name='picture';
input.type='file';
input.style.marginLeft='86px';
form.append(label,br,input,br);

const generate=document.createElement('button');
generate.type='submit';
generate.innerText="Generate Card";
generate.className='button';
form.append(generate);

generate.addEventListener('mouseover',function(){
    generate.className='buttonOver';
});

generate.addEventListener('mouseout',function(){
    generate.className='button';
});

const cardTitle = document.createElement('p');
cardTitle.innerText = 'Generated ID Card';
cardTitle.className='cardTitle';

const stdImg = document.createElement('div');
const spicture=document.createElement('img');
const stdDet = document.createElement('div');
const sname=document.createElement('p');
const scollege = document.createElement('p');
const slocation = document.createElement('p');

form.addEventListener('submit',function(evt){
    evt.preventDefault();

    if(document.forms['Detailsform']['name'].value!='' && document.forms['Detailsform']['college'].value!='' && document.forms['Detailsform']['location'].value!='')
    {
        cardCont.appendChild(cardTitle);

    const card = document.createElement('div');
    card.className='card';

    spicture.src=URL.createObjectURL(document.forms['Detailsform']['picture'].files[0]);
    spicture.className='spicture';
    stdImg.appendChild(spicture);
  
    sname.innerHTML = 'Name     : '+document.forms['Detailsform']['name'].value;
    sname.className='sname';
    sname.style.paddingTop='15px';
    stdDet.appendChild(sname);
	
    scollege.innerHTML='College  : '+document.forms['Detailsform']['college'].value;
    scollege.className='sname';
    stdDet.appendChild(scollege);

    slocation.innerHTML='Location : '+document.forms['Detailsform']['location'].value;
    slocation.className='sname';
    stdDet.appendChild(slocation);

    card.appendChild(stdImg);
    card.appendChild(stdDet);
    cardCont.appendChild(card);
    }
});

