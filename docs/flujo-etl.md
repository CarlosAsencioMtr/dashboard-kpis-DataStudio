# Flujo ETL

Este documento describe el proceso ETL implementado en el proyecto.

## 1. Extracción

Los datos son extraídos desde un ERP empresarial y sincronizados mediante Google Drive hacia Google Sheets.

## 2. Transformación

Los datos son procesados mediante Google Apps Script utilizando JavaScript.

Durante esta etapa se realizan tareas como:

- Limpieza de datos
- Eliminación de espacios innecesarios
- Normalización de textos
- Validación de campos
- Estructuración de columnas
- Preparación de datos para análisis

## 3. Carga

Después de ser procesados, los datos son utilizados como fuente para un dashboard interactivo en Looker Studio.

## 4. Automatización

El dashboard se actualiza automáticamente cada 5 minutos, permitiendo visualizar métricas e indicadores en tiempo casi real.

## Resultado

El proceso reduce intervención manual, mejora la calidad de los datos y facilita la toma de decisiones basada en información actualizada.
