import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'GalleryWebPartStrings';
import Gallery from './components/Gallery';
import { IGalleryProps } from './components/IGalleryProps';

export interface IGalleryWebPartProps {
  listName     : string;
  order        : string;
  numberOfItems: number;
  style        : string;
}

export default class GalleryWebPart extends BaseClientSideWebPart<IGalleryWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGalleryProps > = React.createElement(
      Gallery,
      {
        listName     : this.properties.listName,
        order        : this.properties.order,
        numberOfItems: this.properties.numberOfItems,
        style        : this.properties.style
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
