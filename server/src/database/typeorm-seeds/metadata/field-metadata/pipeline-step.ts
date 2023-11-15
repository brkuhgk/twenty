import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedPipelineStepFieldMetadataIds {
  Id = '20202020-039a-4fbd-b4c1-66dfa9e4bd3f',
  CreatedAt = '20202020-816f-4861-9b36-4a2f8ae2791c',
  UpdatedAt = '20202020-2d73-4829-b774-522c2f5627d7',

  Name = '20202020-f294-430e-b800-3a411fc05ad3',
  Color = '20202020-5b93-4b28-8c45-7988ea68f91b',
  Position = '20202020-6296-4cab-aafb-121ef5822b13',
  Opportunities = '20202020-22c4-443a-b114-43c97dda5867',
}

export const seedPipelineStepFieldMetadata = async (
  workspaceDataSource: DataSource,
  schemaName: string,
) => {
  await workspaceDataSource
    .createQueryBuilder()
    .insert()
    .into(`${schemaName}.${fieldMetadataTableName}`, [
      'id',
      'objectMetadataId',
      'isCustom',
      'workspaceId',
      'isActive',
      'type',
      'name',
      'label',
      'targetColumnMap',
      'description',
      'icon',
      'isNullable',
    ])
    .orIgnore()
    .values([
      // Default fields
      {
        id: SeedPipelineStepFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.UUID,
        name: 'id',
        label: 'Id',
        targetColumnMap: {
          value: 'id',
        },
        description: undefined,
        icon: undefined,
        isNullable: true,
        // isSystem: true,
      },
      {
        id: SeedPipelineStepFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'createdAt',
        label: 'Creation date',
        targetColumnMap: {
          value: 'createdAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
      },
      {
        id: SeedPipelineStepFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: FieldMetadataType.DATE,
        name: 'updatedAt',
        label: 'Update date',
        targetColumnMap: {
          value: 'updatedAt',
        },
        description: undefined,
        icon: 'IconCalendar',
        isNullable: true,
      },
      // Main Identifier
      {
        id: SeedPipelineStepFieldMetadataIds.Name,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'name',
        label: 'Name',
        targetColumnMap: {
          value: 'name',
        },
        description: 'Pipeline Step name',
        icon: 'IconCurrencyDollar',
        isNullable: false,
      },

      // Scalar Fields
      {
        id: SeedPipelineStepFieldMetadataIds.Color,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'color',
        label: 'Color',
        targetColumnMap: {
          value: 'color',
        },
        description: 'Pipeline Step color',
        icon: 'IconColorSwatch',
        isNullable: false,
      },
      {
        id: SeedPipelineStepFieldMetadataIds.Position,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'NUMBER',
        name: 'position',
        label: 'Position',
        targetColumnMap: {
          value: 'position',
        },
        description: 'Pipeline Step position',
        icon: 'IconHierarchy2',
        isNullable: false,
      },

      // Relationships
      {
        id: SeedPipelineStepFieldMetadataIds.Opportunities,
        objectMetadataId: SeedObjectMetadataIds.PipelineStep,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'RELATION',
        name: 'opportunities',
        label: 'Opportunities',
        targetColumnMap: {},
        description: 'Opportunities linked to the step.',
        icon: 'IconTargetArrow',
        isNullable: true,
      },
    ])
    .execute();
};