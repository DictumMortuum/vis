import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  List,
  TextField,
  useUpdate,
  useNotify,
  useRecordContext,
  Create,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  BooleanInput,
  Datagrid,
  DatagridBody,
  RecordContextProvider,
  DateField,
  UrlField
} from 'react-admin';
import { Button, TableCell, TableRow } from '@mui/material';

const ReserveButton = props => {
  const record = useRecordContext();
  const { id, reserved } = record;
  const notify = useNotify();
  const text = reserved ? "unreserve" : "reserve";
  const color = reserved ? "warning" : "primary";

  const [update, { isLoading }] = useUpdate(
    'wishes',
    { id, data: { reserved: !reserved }, previousData: record },
    {
      mutationMode: 'undoable',
      onSuccess: () => {
        notify(`Wish successfully ${text}d`, { type: 'info', undoable: true, });
      },
      onError: () => {
        notify(`Error trying to ${text} wish`, { type: 'warning', });
      },
    }
  );

  return (
    <LoadingButton sx={{ width: 120 }} loading={isLoading} onClick={() => update()} color={color} {...props}>{text}</LoadingButton>
  )
};

const LinkButton = props => {
  const record = useRecordContext();
  const { url, name } = record;
  return (
    <Button href={url} target="_blank" {...props}>{name}</Button>
  );
}

const postFilters = [
  <ReferenceInput source="person_id" reference="people" alwaysOn>
    <SelectInput optionValue="id" optionText="name" />
  </ReferenceInput>,
];

const MyDatagridRow = ({ record, id, children }) => (
  <RecordContextProvider value={record}>
    <TableRow>
    <TableCell />
    {React.Children.map(children, field => (
      <TableCell key={`${id}-${field.props.source}`}>
        {field}
      </TableCell>
    ))}
    </TableRow>
  </RecordContextProvider>
);

const MyDatagridBody = props => <DatagridBody {...props} row={<MyDatagridRow />} />;
const MyDatagrid = props => <Datagrid {...props} body={<MyDatagridBody />} />;

export const WishList = () => (
  <List perPage={50} filters={postFilters} sort={{ field: 'name', order: 'DESC' }} header={false} filterDefaultValues={{ person_id: 1 }}>
    <MyDatagrid rowClick="" header={() => { }}>
      <LinkButton />
      {/* <ReferenceField source="person_id" reference="people">
        <TextField source="name" />
      </ReferenceField> */}
      <ReserveButton variant="contained" />
    </MyDatagrid>
  </List>
);

export const WishCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="type" />
      <BooleanInput source="reserved" defaultValue={false} />
      <ReferenceInput source="person_id" reference="people">
        <SelectInput optionValue="id" optionText="name" defaultValue={1} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const CouponList = () => (
  <List perPage={50}>
    <Datagrid rowClick="">
      <TextField source="code" />
      <UrlField source="store" />
      <TextField source="desc" />
      <DateField source="valid_until" />
    </Datagrid>
  </List>
);
