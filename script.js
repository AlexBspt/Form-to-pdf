function askwelder(){

var docnum = document.querySelector('#docnum').value;
var appl_date = document.querySelector('#appl_date').value;
var welder = document.querySelector('#welder').value;
var birthday = document.querySelector('#birthday').value;
var workname = document.querySelector('#workname').value;

var work_cont = document.querySelector('#work_cont').value;
var exp = document.querySelector('#exp').value;
var level = document.querySelector('#level').value;
var prof_educ = document.querySelector('#prof_educ').value;
var spec_educ = document.querySelector('#spec_educ').value;

var group = document.querySelector('#group').value;
var atttype = document.querySelector('#atttype').value;
var weldcod = document.querySelector('#weldcod').value;
var meth = document.querySelector('#meth').value;

var material = document.querySelector('#material').value;
var typeunit = document.querySelector('#typeunit').value;
var seam = document.querySelector('#seam').value;
var compaund = document.querySelector('#compaund').value;
var thick = document.querySelector('#thick').value;
var diametr = document.querySelector('#diametr').value;
var position = document.querySelector('#position').value;
var weldmat = document.querySelector('#weldmat').value;

var norm = document.querySelector('#norm').value;
var headtitle = document.querySelector('#headtitle').value;
var headname = document.querySelector('#headname').value;

var docInfo = {

 info: {
 title:'Тестовый документ PDF',
 author:'Энергосервис',
 subject:'Заявка',
 keywords:'аттестация сварщиков'
 },

 pageSize:'A4',
 pageOrientation:'portrait',
 pageMargins:[50,200,30,60],


 footer:[
 {
 text:'',
 alignment:'center',
 }
 ],

 content: [

 {
 text: 'ЗАЯВКА НА ПРОВЕДЕНИЕ АТТЕСТАЦИИ СВАРЩИКА',
 fontSize:14,
 alignment:'center',
 },

 {
 text:`Заявка № ${docnum} от ${appl_date}`,
 alignment:'center',
 margin:[0,30,0,20],
 },
 {
 text:'1. Общие сведения о сварщикe',
 },
 {
 text:`1.1. Фамилия, имя, отчество: ${welder}`,
 },
 {
 text:`1.2. Дата рождения: ${birthday}`,
 },
 {
 text:`1.3. Место работы (наименование, адрес, телефон предприятия): ${workname}, ${work_cont}`,
 },
 {
 text:`1.4. Стаж работы по сварке: ${exp}`,
 },
 {
 text:`1.5. Квалификационный разряд: ${level}`,
 },
 {
 text:`1.6. Наличие уровня профессиональной подготовки: ${prof_educ}`,
 },
 {
 text:`1.7. Специальная подготовка: ${spec_educ}`,
 },
 {
 text:'2. Аттестационные требования',
  margin:[0,10,0,0],
 },
 {
 text:`2.1. Наименования групп технических устройств опасных производственных объектов: ${group}`,
 },
 {
 text:`2.2. Вид аттестации: ${atttype}`,
 },
 {
 text:`2.3. Шифр НД по сварке: ${weldcod}`,
 },
 {
 text:`2.4. Способ сварки (наплавки): ${meth}`,
 },
 {
 text:`2.5. Группа, класс и марка свариваемого материала: ${material}`,
 },
 {
 text:`2.6. Вид свариваемых деталей: ${typeunit}`,
 },
 {
 text:`2.7. Типы сварных швов: ${seam}`,
 },
 {
 text:`2.8. Вид соединения: ${compaund}`,
 },
 {
 text:`2.9. Диапазон толщин деталей: ${thick}`,
 },
 {
 text:`2.10. Диапазон диаметров деталей: ${diametr}`,
 },
 {
 text:`2.11. Положение при сварке: ${position}`,
 },
 {
 text:`2.12. Сварочные материалы (электроды, проволока и т.д.): ${weldmat}`,
 },
 {
 text:'3. Требования к оценке качества контрольных сварных соединений и наплавок',
  margin:[0,10,0,0],
 },
 {
 text:`3.1. Нормативный документ по контролю: ${norm}`,
 },

 {
 text:`${headtitle} ${workname} ______________________ ${headname}`,
 margin:[0,30,0,0],
 },
 {
 text:'М.П.',
 margin:[0,30,0,0],
 },
 ]
}


	pdfMake.createPdf(docInfo).download('ask.pdf');
}