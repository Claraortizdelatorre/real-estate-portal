import { 
    onUpdateField, 
    onSetError, 
    onSubmitForm, 
    onSetFormErrors,
    onAddFile
} from '../../common/helpers';
import { 
    formatCheckboxId, 
    formatDeleteFeatureButtonId, 
    onAddFeature, 
    onAddImage, 
    onRemoveFeature, 
    setCheckboxList, 
    setOptionList,
    addElement,
    removeElement, 
} from './upload-property.helpers';
import { formValidation } from './upload-property.validations';

let property = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypeIds:[],
    address: '',
    city:'',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: [],
    equipmentIds:[],
    images:[],
};

onUpdateField('title', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        title: value
    };

    formValidation.validateField('title', property.title).then(result => {
        onSetError('title', result);
    });
});

onUpdateField('notes', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        notes: value
    };

    formValidation.validateField('notes', property.notes).then(result => {
        onSetError('notes', result);
    });
});


onUpdateField('email', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        email: value,
    };

    formValidation.validateField('email', property.email).then(result => {
        onSetError('email', result);
    });
});

onUpdateField('phone', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        phone: value,
    };

    formValidation.validateField('phone', property.phone).then(result => {
        onSetError('phone', result);
    });
});

onUpdateField('price', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        price: value,
    };

    formValidation.validateField('price', property.price).then(result => {
        onSetError('price', result);
    });
});

// Datos vivienda
onUpdateField('address', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        address: value,
    };

    formValidation.validateField('address', property.address).then(result => {
        onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        city: value,
    };

    formValidation.validateField('city', property.city).then(result => {
        onSetError('city', result);
    });
});

onUpdateField('province', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        province: value,
    };

    formValidation.validateField('province', property.province).then(result => {
        onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        squareMeter: value,
    };

    formValidation.validateField('squareMeter', property.squareMeter).then(result => {
        onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        rooms: value,
    };

    formValidation.validateField('rooms', property.rooms).then(result => {
        onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        bathrooms: value,
    };

    formValidation.validateField('bathrooms', property.bathrooms).then(result => {
        onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        locationUrl: value,
    };

    formValidation.validateField('locationUrl', property.locationUrl).then(result => {
        onSetError('locationUrl', result);
    });
});

// Insertar caracteristicas basicas
onSubmitForm('insert-feature-button', () => {
    const value = document.getElementById('newFeature').value; //obtengo el valor introducido

    if (value) {
        newProperty = addElement(value, newProperty, 'mainFeatures');

        onAddFeature(value);

        const buttonId = formatDeleteFeatureButtonId(value); //eliminar por id

        onSubmitForm(buttonId, () => {
            onRemoveFeature(value);
            newProperty = removeElement(value, newProperty, 'mainFeatures');
        });
    };
});

// Añadir Imágenes
onAddFile('add-image', image => {
    onAddImage(image);

    property = {
        ...property,
        images: [...property.images, image],
    };
});