import { getContext } from "./src/utils/utils";
/* Variable Declarations */
const fileInput = document.getElementById('imageUpload');
const transformerCanvas = document.getElementById('transformer');
const resultCanvas = document.getElementById('result');

const transformerCTX = getContext(transformerCanvas);
const resultCTX = getContext(resultCanvas);


const files = [];
var index = 0;

fileInput.addEventListener('dragover', (event) => {
    fileInput.style.border = '2px dotted var(--color-accent)';
    event.preventDefault();
});

fileInput.addEventListener('dragend', (event) => {
    fileInput.style.border = 'none';
    event.preventDefault();
});

fileInput.addEventListener('dragleave', (event) => {
    fileInput.style.border = 'none';
    event.preventDefault();
});

fileInput.addEventListener('change', (event) => {
    event.files.forEach(file => {
        files.push(file);
    })
})


/* Copy files (images) from clipboard */
const pasteImage = async () => {
    try
    {
        const clipboardContents = await navigator.clipboard.read();

        for (const item of clipboardContents)
        {
            if(!item.types.includes('image/png'))
            {
                throw new Error("No images are in clipboard");
            }

            const blob = await item.getType('image/png');
            const imageSrc = URL.createObjectURL(blob);
            const img = new Image();
            
            img.addEventListener('load', () => {
                canvas.width = img.width;
                canvas.height = img.height;
                transformerCTX.drawImage(img, 0, 0);
                resultCTX.drawImage(img, 0, 0);
            });

            img.src = imageSrc;
        }
    }
    catch (error)
    {
        console.error(`There was an error pasting the images <${error}>`);
    }
}

window.addEventListener('keydown', async (event) => {
    if(event.ctrlKey && event.key.toLocaleLowerCase().includes('v'))
    {
        console.log('Pasting Image');
        await pasteImage();
        event.preventDefault();
    }
})

/* Button Behavior Methods */

const GenerateAscii = () => {
    console.log('Files: ', files);
}