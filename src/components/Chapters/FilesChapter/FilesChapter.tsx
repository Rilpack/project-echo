import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales';
import styles from "./FilesChapter.module.scss"
import { Button } from "../../Buttons/Button/Button";
import { rows } from "../../../config/exampleRows";

export const FilesChapter = () => {

  const columns: GridColDef[] = [
    {
      field: 'download',
      headerName: '',
      flex: 1,
      maxWidth: 125,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: () => (<button className={styles.button_download}>Скачать</button>)
    },
    {
      field: 'name',
      headerName: 'Имя файла',
      headerAlign: 'left',
      flex: 1,
      maxWidth: 550,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (<div>{params.value}</div>)
    },
    {
      field: 'length',
      headerName: 'Длит.',
      headerAlign: 'left',
      flex: 1,
      maxWidth: 150,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (<div>{params.value}</div>)
    },
    {
      field: 'speakers',
      headerName: 'Спикеры',
      headerAlign: 'left',
      flex: 1,
      maxWidth: 100,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (<div>{params.value}</div>)
    },
    {
      field: 'created_at',
      headerName: 'Дата создания',
      headerAlign: 'left',
      flex: 1,
      maxWidth: 200,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (<div>{params.value}</div>)
    },
  ];

  return (
    <div className={styles.container_files_chapter}>
      <div className={styles.wrapper_title_files_chapter}>
        <h2>Мои файлы</h2>
        <Button onClick={() => undefined} text="Загрузить файл" />
      </div>
      <DataGrid
        disableColumnMenu
        disableColumnResize={true}
        autoPageSize
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        style={{ width: '100%' }}
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        rowHeight={50}
        checkboxSelection={false}
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        rowSelection={false}
        showCellVerticalBorder={true}
      />
    </div>
  )
}