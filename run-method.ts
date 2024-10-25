import { argv } from 'process';
import { join } from 'path';

async function runMethod() {
  const [filePath, methodName, ...methodArgs] = argv.slice(2);

  try {
    // Dynamically import the TypeScript file
    const module = await import(join(__dirname, filePath!));

    // Check if the method exists
    if (typeof module[methodName!] === 'function') {
      const result = await module[methodName!](...methodArgs);
      if(result){
        console.log('Method result:', result);
      }else{
        console.log(`Method terminated`);
      }
    } else {
      console.error(`Method ${methodName} not found in ${filePath}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  process.exit(0);
}

runMethod();

