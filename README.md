# Proyecto de Integración, Transformación y Visualización de Datos Empresariales

Este proyecto consiste en el diseño e implementación de un flujo automatizado para la recolección, transformación, normalización y visualización de datos provenientes de un ERP empresarial.

La información es extraída del ERP y sincronizada mediante Google Drive hacia una hoja de cálculo de Google Sheets. Posteriormente, los datos son procesados utilizando JavaScript a través de Google Apps Script, donde se realizan tareas de limpieza, transformación, normalización y estructuración para garantizar la calidad y consistencia de la información antes de su análisis.

Una vez procesados, los datos son utilizados como fuente para un dashboard interactivo en Looker Studio con actualización automática cada 5 minutos, permitiendo visualizar indicadores, métricas y reportes en tiempo casi real para apoyar la toma de decisiones.

## Objetivo

Automatizar el proceso de integración, transformación y visualización de datos empresariales para reducir intervención manual, mejorar la calidad de la información y facilitar la toma de decisiones.

## Tecnologías utilizadas

- ERP Empresarial
- Google Drive
- Google Sheets
- JavaScript
- Google Apps Script
- Looker Studio
- Google Workspace

## Flujo del proceso

```text
ERP Empresarial
      ↓
Google Drive
      ↓
Google Sheets
      ↓
Google Apps Script
      ↓
Looker Studio
