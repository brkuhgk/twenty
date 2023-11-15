import { DataSource } from 'typeorm';

import { SeedObjectMetadataIds } from 'src/database/typeorm-seeds/metadata/object-metadata';
import { SeedWorkspaceId } from 'src/database/seeds/metadata';
import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';

const fieldMetadataTableName = 'fieldMetadata';

export enum SeedWebhookFieldMetadataIds {
  Id = '20202020-bc24-4387-8abe-9fbe7849f820',
  CreatedAt = '20202020-c643-4324-9032-f38117fbca3b',
  UpdatedAt = '20202020-489b-4f1d-80a4-2dddf6fa0e7c',

  TargetUrl = '20202020-c16e-4ba8-bb24-bbd88e9cdabc',
  Operation = '20202020-5995-493a-92a8-31376e5c052a',
}

export const seedWebhookFieldMetadata = async (
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
        id: SeedWebhookFieldMetadataIds.Id,
        objectMetadataId: SeedObjectMetadataIds.Webhook,
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
        id: SeedWebhookFieldMetadataIds.CreatedAt,
        objectMetadataId: SeedObjectMetadataIds.Webhook,
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
        id: SeedWebhookFieldMetadataIds.UpdatedAt,
        objectMetadataId: SeedObjectMetadataIds.Webhook,
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
      // Scalar fields
      {
        id: SeedWebhookFieldMetadataIds.TargetUrl,
        objectMetadataId: SeedObjectMetadataIds.Webhook,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'targetUrl',
        label: 'Target Url',
        targetColumnMap: {
          value: 'targetUrl',
        },
        description: 'Webhook target url',
        icon: 'IconLink',
        isNullable: false,
      },
      {
        id: SeedWebhookFieldMetadataIds.Operation,
        objectMetadataId: SeedObjectMetadataIds.Webhook,
        isCustom: false,
        workspaceId: SeedWorkspaceId,
        isActive: true,
        type: 'TEXT',
        name: 'operation',
        label: 'Operation',
        targetColumnMap: {
          value: 'operation',
        },
        description: 'Webhook operation',
        icon: 'IconCheckbox',
        isNullable: false,
      },
    ])
    .execute();
};