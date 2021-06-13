 <div dir="rtl">
  
# مشروع الأسبوع الثالث | Project 03 
## الوصف
في هذا المشروع، سيتم تحويل المشروع السابق التابع للأسبوع الثاني إلى function component مع تطبيق المتطلبات أدناه
## المتطلبات
- استخدام مكتبة react-router-dom 
- استخدام Third-Party-Authentication 
- استخدام دالتين على الأقل من دوال Hooks

### ملاحظة
يجب إرفاق صورة من المشروع في ملف README.md
  
</div>



# CONTENT
This project is for education purpose. How to use React and apply a specific concepts .

## NASA EPIC API
In this project i will requesting data from NASA open source APIs using axios , it is free and public data that NASA has maintains .

https://user-images.githubusercontent.com/82523761/120873756-2625f280-c5ac-11eb-9d14-d7b4a692471b.mov


## Concepts :
- react-router-dom 
  - exact path='/'
  - path='/epic-api'
  - component={NotFound}
- Third-Party-Authentication
- Hooks
 
## Project built using  :
- React
- bootstrap , css
- AJAX ( Axios )
- NASA EPIC API

## Components :
- Headre Component
- DateLC Component
- AboutApi Component
- Cards Component
- NotFound Component
- Sginin Component
   
  
## Dependencies :
  - Generate API Key, [here](https://api.nasa.gov/). 
    
      - 1- Get started
      - 2- fill up your info
      - 3- grap your Api key 
  
  - your fav text editor (= !
  -   change the API KEY here :
      ``` 
              axios.get(`https://api.nasa.gov/EPIC/api/natural/images?api_key=K6FLQtrQpXhz6wDRuCrVbtdmWl2hvnEz0aklQYZ3`)

      ```
       
      #### NOTE*   imges are updaeted daily , so we need to update the date into the link 
      ##### for example: today date is 2021-06-02 , change it to the current date (year , month , day) .
      
      ```
          <img src={`https://epic.gsfc.nasa.gov/archive/natural/2021/06/02/png/${epic.image}.png`} className="card-img-top" />
      ```  

## EPIC API Documentation Page
Read more about the api from NASA api documentation [here](https://epic.gsfc.nasa.gov/about/api). 
