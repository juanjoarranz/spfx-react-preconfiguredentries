declare interface IGalleryWebPartStrings {
  PropertyPaneDescription           : string;
  BasicGroupName                    : string;
  ListNameFieldLabel                : string;
  OrderFieldLabel                   : string;
  OrderFieldChronologicalOptionLabel: string;
  OrderFieldReversedOptionLabel     : string;
  NumberOfItemsFieldLabel           : string;
  StyleFieldLabel                   : string;
  StyleFieldThumbnailsOptionLabel   : string;
  StyleFieldListOptionLabel         : string;
}

declare module 'GalleryWebPartStrings' {
  const strings: IGalleryWebPartStrings;
  export = strings;
}
