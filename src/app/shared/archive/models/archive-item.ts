import { IBaseEntity } from "../../Interfaces/ibase-entity";

export class ArchiveItem implements IBaseEntity {
  id!: number;
  thumbnailUrl!: string;
  name!: string;
  creationDate!: Date;
  legend!: string;
  state!: string;
  city!: string;
  authorId!: number;
  collectionId!: number;
  donor!: string;
  contextHistory!: string;
  created!: Date;
  updated!: Date;
  technique!: string;
  material!: string;
  digitalized!: boolean;
}
