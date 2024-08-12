import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales';
import styles from "./FilesChapter.module.scss"
import download from '../../../assets/images/svg/download.svg'
import upload from '../../../assets/images/svg/upload.svg'
import { rows } from "../../../config/exampleRows";
import { useEffect, useState } from "react";

interface IFilesChapter {
  showModal: () => void
}

export const FilesChapter = ({ showModal }: IFilesChapter) => {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Состояние ширина экрана для таблицы

  // Управление шириной экрана для таблицы
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'download',
      headerName: '',
      flex: 1,
      minWidth: 53,
      maxWidth: 53,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: () => (<div className={styles.btn_container}>
        <button className={styles.button_download_icon}><img className={styles.img_icon} src={download} /></button>
      </div>)
    },
    {
      field: 'name',
      headerName: 'Имя файла',
      headerAlign: 'left',
      flex: 1,
      display: 'text',
      maxWidth: 475,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (params.value)
    },
    {
      field: 'length',
      headerName: 'Длит.',
      headerAlign: 'left',
      flex: 1,
      display: 'text',
      maxWidth: 150,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (params.value)
    },
    {
      field: 'speakers',
      headerName: 'Спикеры',
      headerAlign: 'left',
      flex: 1,
      display: 'text',
      minWidth: 10,
      maxWidth: 100,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (params.value)
    },
    {
      field: 'created_at',
      headerName: 'Дата создания',
      headerAlign: 'left',
      flex: 1,
      display: 'text',
      maxWidth: 200,
      sortable: false,
      filterable: false,
      headerClassName: styles.headerText,
      cellClassName: styles.cellText,
      renderCell: (params) => (params.value),
    },
  ];

  return (
    <div className={styles.container_files_chapter}>
      <div className={styles.wrapper_title_files_chapter}>
        <h3 className={styles.h3_text}>Мои файлы</h3>
        <button onClick={showModal} className={styles.btn_upload}>Загрузить файл</button>
        <button onClick={showModal} className={styles.btn_upload_icon}>
          <img className={styles.img_icon} src={upload} />
        </button>
      </div>
      <DataGrid
        columnVisibilityModel={{
          length: !isMobile,
          speakers: !isMobile,
        }}
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