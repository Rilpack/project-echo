import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales';
import styles from "./FilesChapter.module.scss"
import { rows } from "../../../config/exampleRows";

interface IFilesChapter {
  showModal: () => void
}

export const FilesChapter = ({ showModal }: IFilesChapter) => {

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
        <h3 className={styles.h3_text}>Мои файлы</h3>
        <button onClick={showModal} className={styles.btn_open_form}>Загрузить файл</button>
      </div>
      <DataGrid
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
        disableColumnMenu
        disableColumnResize={true}
        rowSelection={false}
        showColumnVerticalBorder={false}
        showCellVerticalBorder={false}
      />
    </div>
  )
}