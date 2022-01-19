import fs from 'fs';

export class IOProvider {
  constructor(private readonly _fileName: string) {}

  public readFileSync(): [string, unknown] {
    let file = '';
    let err;
    try {
      file = fs.readFileSync(this._fileName, 'utf-8');
    } catch (e) {
      err = new Error(`File not found`);
    }

    return [file, err];
  }

  public writeFileSync<T = unknown>(data: T) {
    let file;
    let err;
    try {
      file = String(data);
      fs.writeFileSync(this._fileName, file);
    } catch (error) {
      err = new Error('Something went wrong when writing to file');
    }

    return [file, err];
  }
}
