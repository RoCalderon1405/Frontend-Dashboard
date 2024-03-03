import React, { useState } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import Header from "../components/Header";
import { tokens } from "../themeSettings";

const Calendar = () => {
  const colorMode = useSelector((state) => state.colorMode.mode);
  const colors = tokens(colorMode);

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Por favor ingresa un nuevo título para tu evento");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `¿Estás seguro que quieres eliminar el evento ${selected.event.title}?`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <>
      <Box>
        <Header title="Calendario" subtitle="Calendario completo interactivo" />

        <Box display="flex" justifyContent="space-between">
          {/* Calendario sidebar */}
          <Box
            flex="1 1 20%"
            padding="15px"
            borderRadius="4px"
            sx={{
              backgroundColor: colors.primary[400],
            }}
          >
            <Typography variant="h5">Eventos</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[800],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Calendario */}
          <Box
            flex="1 1 100%"
            ml="15px"
            sx={{
              "& .fc-list-day-cushion": {
                backgroundColor: colors.greenAccent[800],
              },
              "& .fc-list-event": {
                "&:hover": {
                  cursor: "pointer", // Cambia el cursor al hacer hover si lo deseas
                },
              },
              "& --fc-list-event-hover-bg-color": {
                backgroundColor: `${colors.greenAccent[700]} !important`,
              },
              "& .fc-popover": {
                backgroundColor: colors.blueAccent[800],
              },
            }}
          >
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              locale="es"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              buttonText={{
                dayGridMonth: "Mes",
                timeGridWeek: "Semana",
                timeGridDay: "Día",
                listMonth: "Lista",
                today: "Hoy",
              }}
              initialView="dayGridMonth"
              // editable={true}
              // selectable={true}
              // selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "1",
                  title: "Dia de presentación de proyecto",
                  date: "2024-02-20",
                },
                {
                  id: "2",
                  title: "Recepción 30 expedientes",
                  date: "2024-02-21",
                },
                {
                  id: "3",
                  title: "Evento 3",
                  date: "2024-02-10",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Calendar;
