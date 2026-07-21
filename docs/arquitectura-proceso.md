# Arquitectura del Proceso

Este proyecto implementa un flujo automatizado para integrar, transformar y visualizar datos provenientes de un ERP empresarial.

## Flujo general

El proceso sigue esta arquitectura:

ERP Empresarial → Google Drive → Google Sheets → Google Apps Script → Looker Studio

## Descripción de la arquitectura

1. Los datos son generados o extraídos desde un ERP empresarial.
2. La información es sincronizada mediante Google Drive.
3. Los datos llegan a una hoja de cálculo en Google Sheets.
4. Google Apps Script procesa los datos mediante JavaScript.
5. Se realizan tareas de limpieza, transformación, normalización y estructuración.
6. Los datos procesados alimentan un dashboard en Looker Studio.
7. El dashboard se actualiza automáticamente cada 5 minutos.

## Objetivo de la arquitectura

Garantizar que la información empresarial esté actualizada, organizada y disponible para la toma de decisiones en tiempo casi real.
