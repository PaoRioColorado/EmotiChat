# EmotiChat

**Asistente conversacional de bienestar emocional con procesamiento de texto y audio.**

EmotiChat es un prototipo académico desarrollado en Python y Gradio. Permite mantener una conversación por texto o voz, transcribir audios, analizar sentimientos, resumir contenido, traducir mensajes y generar nuevas respuestas habladas.

El proyecto integra en una misma aplicación técnicas de procesamiento del habla y procesamiento del lenguaje natural.

> **Importante:** EmotiChat es una demostración educativa. No realiza diagnósticos y no reemplaza la atención de profesionales de la salud mental.

## Abrir en Google Colab

[![Abrir en Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/PaoRioColorado/EmotiChat/blob/main/EmotiChat_FINAL_V11_ENTREGA_ESTABLE.ipynb)

También se puede descargar el notebook desde este repositorio y abrirlo manualmente en [Google Colab](https://colab.research.google.com/).

## Funcionalidades principales

- Conversación mediante texto, grabación de voz o archivo de audio.
- Transcripción automática con Whisper.
- Comparación de transcripciones entre Whisper y SpeechRecognition.
- Cálculo de WER (*Word Error Rate*) y precisión estimada.
- Análisis de sentimientos con TextBlob, VADER y Transformers.
- Estimación complementaria de características emocionales del audio.
- Traducción y retrotraducción de mensajes.
- Lectura y análisis de archivos TXT.
- Conversión de texto a voz con gTTS.
- Comparación de voces en distintos idiomas y velocidades.
- Pipeline completo: audio → transcripción → sentimiento → resumen → nuevo audio.
- Generación de un informe final en PDF.
- Interfaz adaptable a computadora y teléfono celular.

## Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|---|---|
| Python | Lógica general de la aplicación |
| Gradio | Interfaz web interactiva |
| OpenAI Whisper | Transcripción robusta de audio |
| SpeechRecognition | Método alternativo de transcripción |
| gTTS | Síntesis de voz a partir de texto |
| pydub y FFmpeg | Conversión y preparación de archivos de audio |
| TextBlob | Análisis léxico de sentimientos |
| VADER | Análisis de polaridad e intensidad emocional |
| Transformers | Clasificación de sentimientos mediante un modelo preentrenado |
| SpeechBrain | Procesamiento complementario de características de la voz |
| langdetect | Detección automática del idioma |
| deep-translator | Traducción y retrotraducción |
| ReportLab | Creación del informe en PDF |

## Módulos de la aplicación

### Conversación

Permite conversar escribiendo, grabando un mensaje o seleccionando un archivo de audio. Cuando se envía voz, EmotiChat la transcribe antes de procesar el mensaje.

También admite archivos TXT. Al seleccionar uno, la aplicación puede analizar su sentimiento, incorporarlo a la conversación y generar una versión hablada.

### Procesamiento de voz

Contiene tres pestañas:

1. **Análisis completo:** ejecuta el pipeline sobre el último audio de la conversación o sobre otro archivo seleccionado.
2. **Comparar transcripciones:** compara Whisper y SpeechRecognition, calcula el WER y muestra el tiempo y la precisión de cada método.
3. **Texto a voz:** convierte un TXT a audio y permite comparar idiomas y velocidades.

### Traducción

Detecta el idioma del último mensaje, lo traduce y realiza una retrotraducción para comprobar si se conserva el significado. Como depende de servicios externos, necesita conexión a Internet.

### Sentimientos

Combina distintos métodos de análisis para no depender de una sola técnica. Presenta el resultado predominante y una explicación orientativa.

### Conclusiones

Resume los resultados de la sesión, explica las tecnologías empleadas y permite generar un informe descargable en PDF.

## Pipeline completo de audio

El flujo solicitado en el trabajo se encuentra en **Procesamiento de voz → Análisis completo**:

```text
Audio
  ↓
Transcripción con Whisper
  ↓
Análisis de sentimiento
  ↓
Resumen del resultado
  ↓
Nuevo audio generado con gTTS
```

Se puede analizar el último audio enviado al chat o seleccionar un archivo diferente.

## Comparación de síntesis de voz

La actividad de texto a voz se encuentra en **Procesamiento de voz → Texto a voz**. A partir de un archivo TXT se pueden generar versiones en:

- Español
- Inglés
- Francés
- Portugués
- Alemán

También se puede elegir velocidad lenta, normal o rápida. La comparación puede realizarse considerando pronunciación, claridad, naturalidad, ritmo y pausas.

## Ejecución

1. Abrir `EmotiChat_FINAL_V11_ENTREGA_ESTABLE.ipynb` en Google Colab.
2. Seleccionar **Entorno de ejecución → Ejecutar todas**.
3. Esperar la instalación de dependencias y la carga inicial de los modelos.
4. Permitir las ventanas emergentes si el navegador las bloquea.
5. Abrir el botón **Abrir EmotiChat en Gradio** que aparece al final.
6. En el celular, conceder permiso para utilizar el micrófono cuando sea necesario.

La primera ejecución puede tardar varios minutos porque Colab instala bibliotecas y descarga los modelos. Las operaciones posteriores suelen ser más rápidas gracias a la carga diferida y al uso de caché.

## Archivos del repositorio

El notebook obtiene varios recursos directamente desde GitHub. Para que la aplicación funcione correctamente, se deben conservar estas rutas y nombres:

```text
EmotiChat/
├── EmotiChat_FINAL_V11_ENTREGA_ESTABLE.ipynb
├── README.md
├── Logo_EmotiChat.png
├── Audio informativo.wav
├── Audio emocional.wav
├── css/
│   └── emotichat.css
├── data/
│   └── emotichat_data.json
├── html/
│   └── footer.html
└── js/
    ├── app.js
    └── autoscroll.js
```

No se deben cambiar esos nombres ni mover los archivos sin actualizar también las direcciones utilizadas dentro del notebook.

## Dependencias

El notebook instala automáticamente sus dependencias principales:

```text
gradio
transformers
accelerate
openai-whisper
SpeechRecognition
speechbrain
torchaudio
pydub
deep-translator
langdetect
nltk
textblob
gTTS
reportlab
ffmpeg
```

Se necesita conexión a Internet para instalar las dependencias, descargar recursos de GitHub y utilizar algunos servicios de traducción y síntesis de voz.

## Limitaciones conocidas

- La calidad de la transcripción depende del ruido, el volumen, el acento y la claridad de la grabación.
- La traducción y gTTS dependen de servicios externos y pueden no responder temporalmente.
- El enlace público de Gradio es temporal y cambia cada vez que se reinicia Colab.
- La clasificación emocional es orientativa y no constituye una evaluación clínica.

## Autora

**Paola Fernanda Dueña**  
Tecnicatura en Ciencia de Datos e Inteligencia Artificial  
Instituto Superior de Formación Técnica N.º 190 — Bahía Blanca  
[paoladf.it@gmail.com](mailto:paoladf.it@gmail.com)  
[LinkedIn](https://ar.linkedin.com/in/paoladit/)

## Uso académico

Proyecto realizado como trabajo final de la materia **Técnicas del Procesamiento del Habla**.

### Cita sugerida

> Dueña, P. F. (2026). *EmotiChat* [Código fuente]. GitHub. https://github.com/PaoRioColorado/EmotiChat
