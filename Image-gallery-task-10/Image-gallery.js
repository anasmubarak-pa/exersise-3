let image_uploader = document.querySelector('#imageuploader')
let imagegallery = document.querySelector('.image_gallery')
let upload_text = document.querySelector('.uploadtext')
let delete_img = document.querySelector('.hidden')
console.log(imagegallery)

function deleteSelected()
{
    document.querySelectorAll('.delete').forEach((e)=>{
        imagegallery.removeChild(e)
    })
    isEmpty()
}

function isEmpty()
{
    if(imagegallery.innerHTML=='')
    {
        upload_text.style.display = 'initial'
        delete_img.style.display = 'none'
    }
    else
    {
        upload_text.style.display = 'none'
        delete_img.style.display = 'initial'
    }   
}

isEmpty()

function updateGallery()
{
    if(image_uploader.files)
    {
        console.log(image_uploader.files)
        console.log(URL.createObjectURL(image_uploader.files[0]))
        let image = document.createElement('img')
        image.addEventListener('click',function(e){
            console.log(e.target.classList.toggle('delete'))
        })
        image.src = `${URL.createObjectURL(image_uploader.files[0])}`
        imagegallery.appendChild(image)
        console.log(image_uploader.files)
    }
    isEmpty()
}