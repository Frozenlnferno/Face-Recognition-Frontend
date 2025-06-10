import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div className='p-4'>
            <p className="text-lg text-black p-3">
                {"This Magic Brain will detect faces in your pictures. Give it a try!"}
            </p>
            <div className='center'>
                <div className='form center w-7/10 shadow-lg p-5 rounded-lg'>
                    <input className='text-lg w-8/10 bg-white p-2 mr-2 rounded-sm shadow-lg' type="text" 
                           onChange={onInputChange} />
                    <button className='text-lg w-2/10 p-2 ml-2 bg-white rounded-sm shadow-lg 
                                       hover:bg-gray-200 btn'
                            onClick={onSubmit}> 
                        {'Detect!'} 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;