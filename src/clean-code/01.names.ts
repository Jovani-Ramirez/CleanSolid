(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flag: false },
        { id: 2, flag: false },
        { id: 3, flag: true },
        { id: 4, flag: false },
        { id: 5, flag: false },
        { id: 7, flag: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flag );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elpasedTimeinDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory = 33;
    
    // primer nombre - first name
    const name = 'Fernando';
    
    // primer apellido - last name
    const lastname = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassPerStudent = 6;


})();
