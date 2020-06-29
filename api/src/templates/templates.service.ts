import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import * as handlebars from 'handlebars';

import { AnyObject } from '../common/interfaces';

const readFilePromise = promisify(readFile);

@Injectable()
export class TemplatesService {
  async generate(file: string, data: AnyObject = {}): Promise<string> {
    const template = await this.getTemplate(file);
    const delegate = handlebars.compile(template);
    return delegate(data);
  }

  private async getTemplate(file: string): Promise<string> {
    const content = await readFilePromise(`${resolve(__dirname, 'files', ...file.split('.'))}.hbs`);
    return content.toString();
  }
}
